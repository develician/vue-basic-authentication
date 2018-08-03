// import api from "../lib/api";
import AuthService from "@/lib/service/AuthService";

export default {
  changeInput({ commit }, payload) {
    commit("changeInput", payload);
  },
  initInputs({ commit }, payload) {
    commit("initInputs", payload);
  },
  async register({ commit }, payload) {
    try {
      const response = await AuthService.register(payload);
      commit("register", response);
    } catch (e) {
      console.log(e);
    }
  },
  async login({ commit }, payload) {
    try {
      const response = await AuthService.login(payload);
      commit("login", response);
    } catch (e) {
      console.log(e);
    }
  },
  async checkLogged({ commit }, payload) {
    try {
      const response = await AuthService.checkLogged();
      commit("checkLogged", response);
    } catch (e) {
      console.log(e);
      //   localStorage.removeItem("loggedInfo");
      //   window.location.href = "/auth/login";
    }
  },
  setLogged({ commit }, payload) {
    commit("setLogged");
  },
  async logout({ commit }, payload) {
    try {
      const response = await AuthService.logout();
      commit("logout", response);
    } catch (e) {
      console.log(e);
    }
  }
};
