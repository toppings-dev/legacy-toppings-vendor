import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { promisify } from 'util';

class CognitoClient {
  constructor() {
    const userPoolParams = {
      UserPoolId: 'local_08k2xaAy',
      ClientId: 'd0fw03t1cu3pq3726kyyg4mn5',
      endpoint: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:9229/' : undefined,
    };

    const userPool = new CognitoUserPool(userPoolParams);

    this.userPool = userPool;
    this.poolSignUp = promisify(userPool.signUp).bind(userPool);
    // this.poolResendConfirmationCode = promisify(userPool.resendConfirmationCode).bind(userPool);
    // this.poolAuthenticateUser = promisify(userPool.authenticateUser).bind(userPool);
  }

  userPool;
  poolUser;
  poolSignUp;
  poolConfirmRegistration;
  poolResendConfirmationCode;
  poolAuthenticateUser;
  poolChangePassword;
  poolupdateUserAttributess;
  poolGetCurrentUser;
  poolSignOut;

  async signUp(username, password, attributes) {
    let attributeList = [];

    for (const attribute of attributes) {
      attributeList.push(new CognitoUserAttribute(attribute));
    }

    return this.poolSignUp(username, password, attributeList, null);
  }

  async confirmRegistration(username, code) {
    if (!this.poolUser) {
      const user = new CognitoUser({
        Username: username,
        Pool: this.userPool,
      });

      this.poolUser = user;
    }

    if (!this.poolConfirmRegistration) {
      this.poolConfirmRegistration = promisify(this.poolUser.confirmRegistration).bind(this.poolUser);
    }

    return this.poolConfirmRegistration(code, true);
  }

  async authenticateUser(username, password) {
    if (!this.poolUser) {
      const user = new CognitoUser({
        Username: username,
        Pool: this.userPool,
      });

      this.poolUser = user;
    }

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      this.poolUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
    }

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    if (!this.poolAuthenticateUser) {
      this.poolAuthenticateUser = promisify(this.poolUser.authenticateUser).bind(this.poolUser);
    }

    const authenticate = async (resolve, reject) =>
      await this.poolAuthenticateUser(authDetails, {
        onSuccess: resolve,
        onFailure: reject,
      });

    return new Promise(function (resolve, reject) {
      authenticate(resolve, reject);
    });
  }

  async changePassword(oldPassword, newPassword) {
    if (!this.poolChangePassword) {
      this.poolChangePassword = promisify(this.poolUser.changePassword.bind(this.poolUser));
    }

    return this.poolChangePassword(oldPassword, newPassword);
  }

  async updateUserAttributes(attributes) {
    console.log(this.poolUser);
    if (!this.poolUpdateUserAttributes) {
      this.poolUpdateUserAttributes = promisify(this.poolUser.updateAttributes.bind(this.poolUser));
    }

    let attributeList = [];

    for (const attribute of attributes) {
      attributeList.push(new CognitoUserAttribute(attribute));
    }

    return this.poolUpdateUserAttributes(attributeList);
  }

  async getCurrentUser() {
    // const syncStorage = promisify(this.userPool.storage.sync.bind(this.userPool));
    // const syncRes = await syncStorage();

    // if (syncRes !== 'SUCCESS') return;

    const currentUser = this.userPool.getCurrentUser();

    console.log('SGOSI', currentUser);
    this.poolUser = new CognitoUser({
      Username: currentUser.username,
      Pool: this.userPool,
    });

    const getSession = promisify(this.poolUser.getSession.bind(this.poolUser));
    const session = await getSession();

    return this.poolUser;
  }

  async getCurrentUserAttributes() {
    // console.log('🤬', this.userPool.storage.sync);
    // const syncStorage = promisify(this.userPool.storage.sync.bind(this.userPool));
    // const syncRes = await syncStorage();

    // if (syncRes !== 'SUCCESS') return;

    const currentUser = this.userPool.getCurrentUser();

    this.poolUser = new CognitoUser({
      Username: currentUser.username,
      Pool: this.userPool,
    });

    const getSession = promisify(this.poolUser.getSession.bind(this.poolUser));
    const session = await getSession();

    const getUserAttributes = promisify(this.poolUser.getUserAttributes.bind(this.poolUser));
    const attributes = await getUserAttributes();
    console.log(attributes);
    return attributes;
  }

  async resendConfirmationCode() {
    await this.getCurrentUser();

    if (!this.poolResendConfirmationCode) {
      this.poolResendConfirmationCode = promisify(this.poolUser.resendConfirmationCode.bind(this.poolUser));
    }

    await this.poolResendConfirmationCode();
  }

  async signOut() {
    await this.getCurrentUser();

    this.poolUser.signOut();
  }
}

export default CognitoClient;
