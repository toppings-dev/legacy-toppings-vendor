function getCurrentUser() {
  if (typeof sessionStorage.user === "undefined") {
    return null;
  }
  return JSON.parse(sessionStorage.user);
}

function setCurrentUser(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
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

export { getCurrentUser, setCurrentUser, getCurrentPage, setCurrentPage, clearSession };