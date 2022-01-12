function getCurrentUser() {
  if (typeof sessionStorage.user === "undefined") {
    return null;
  }
  return JSON.parse(sessionStorage.user);
}

function setCurrentUser(data) {
  console.log(data);
  sessionStorage.setItem("user", JSON.stringify(data));
}

function setUnverifiedUser(data) {
  console.log(data);
  sessionStorage.setItem("unverifiedUser", JSON.stringify(data));
}

function getUnverifiedUser() {
  if (typeof sessionStorage.unverifiedUser === "undefined") {
    return null;
  }
  return JSON.parse(sessionStorage.unverifiedUser);
}

function setTokens(data) {
  sessionStorage.setItem('idToken', data.idToken.jwtToken);
  sessionStorage.setItem('accessToken', data.accessToken.jwtToken);
  sessionStorage.setItem('refreshToken', data.refreshToken.token);
}

function getIdToken() {
  return sessionStorage.idToken;
}

function getAccessToken() {
  return sessionStorage.accessToken;
}

function getCurrentPage() { 
  if (typeof sessionStorage.page === "undefined") {
    return null;
  }
  return sessionStorage.page;
}

function setCurrentPage(data) {
  sessionStorage.setItem("page", data);
}

function clearSession(field) {
  sessionStorage.removeItem(field);
}

export { getCurrentUser, setCurrentUser, getCurrentPage, setUnverifiedUser, getUnverifiedUser, setTokens, getIdToken, getAccessToken, setCurrentPage, clearSession };