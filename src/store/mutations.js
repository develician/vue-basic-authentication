// const initialInputs = {
//   username: "",
//   password: "",
//   passwordConfirm: ""
// };

export default {
  changeInput(state, payload) {
    state.inputs[payload.name] = payload.value;
  },
  initInputs(state, payload) {
    state.inputs = payload;
  },
  register(state, payload) {
    state.register.success = true;
  },
  login(state, payload) {
    state.login.success = true;
    state.login.logged = true;
    localStorage.setItem(
      "loggedInfo",
      JSON.stringify({
        username: payload.data
      })
    );
  },
  checkLogged(state, payload) {
    console.log(payload);
  },
  setLogged(state, payload) {
    state.login.logged = true;
  },
  logout(state, payload) {
    state.login.logged = false;
    localStorage.removeItem("loggedInfo");
  }
};
