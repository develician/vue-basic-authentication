import axios from "axios";

export default {
  register({ username, password, passwordConfirm }) {
    return axios.post("/api/auth/register", {
      username,
      password,
      passwordConfirm
    });
  },
  login({ username, password }) {
    return axios.post("/api/auth/login", {
      username,
      password
    });
  },
  checkLogged() {
    return axios.get("/api/auth/check");
  },
  logout() {
    return axios.post("/api/auth/logout");
  }
};
