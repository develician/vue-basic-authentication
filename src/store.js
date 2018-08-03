import Vue from "vue";
import Vuex from "vuex";
import actions from "./store/actions";
import mutations from "./store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputs: {
      username: "",
      password: "",
      passwordConfirm: ""
    },
    register: {
      success: false
    },
    login: {
      success: false,
      logged: false
    }
  },
  mutations,
  actions
});
