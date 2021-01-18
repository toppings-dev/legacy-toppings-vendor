function getCurrentUser() {
  if (typeof sessionStorage.user === "undefined") {
    return null;
  }
  return JSON.parse(sessionStorage.user);
}

function setupSession(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

function clearSession(field) {
  sessionStorage.removeItem(field);
}

export { getCurrentUser, setupSession, clearSession };