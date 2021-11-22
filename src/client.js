
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getCurrentUser } from './utils/session';

const apolloLocal = 'http://localhost:4000/graphql';
const apolloProd = 'https://api.toppingsapp.com/graphql';

const httpLink = new HttpLink({
  // uri: __DEV__ ? apolloLocal : apolloProd,
  uri: apolloLocal,
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const currentUser = getCurrentUser();
  console.log(currentUser);
  const token = currentUser.signInUserSession.idToken.jwtToken;
  const accessToken = currentUser.signInUserSession.accessToken.jwtToken;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
      accessAuthorization: accessToken ? `${accessToken}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      FeedItem: {
        keyFields: ['pk'],
        fields: {
          reactions: {
            merge: false,
          },
        },
      },
      Restaurant: {
        keyFields: ['sk'],
      },
      Query: {
        fields: {
          IncomingFriendRequests: {
            merge: false,
          },
          getOutgoingFriendRequest: {
            merge: false,
          },
          getFriendsFriends: {
            merge: false,
          },
        },
      },
    },
  }),
  link: authLink.concat(httpLink),
});

export default client;