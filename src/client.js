
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getIdToken, getAccessToken } from './utils/session';

const apolloLocal = 'http://localhost:4000/graphql';
const apolloProd = 'https://api.toppingsapp.com/graphql';

const httpLink = new HttpLink({
  uri: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? apolloLocal : apolloProd,
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getIdToken();
  const accessToken = getAccessToken();

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