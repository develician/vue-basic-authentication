<template>
    <div class="form">
        <div class="Logo">Vue - Login</div>
        <div class="contents">
            <div class="Line">
                <div class="Label">아이디</div>
                <div class="Input">
                    <input v-model="username" type="text" />
                </div>
            </div>
            <div class="Line">
                <div class="Label">패스워드</div>
                <div class="Input">
                    <input type="password" v-model="password" v-on:keypress.enter="login" />
                </div>
            </div>
            <div class="Button" @click="login">Login</div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    this.initInputs();
  },
  methods: {
    initInputs() {
      const initialInputs = {
        username: "",
        password: "",
        passwordConfirm: ""
      };
      this.$store.commit("initInputs", initialInputs);
    },
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.$store.state.inputs.username,
          password: this.$store.state.inputs.password
        });
        if (this.$store.state.login.success) {
          this.$router.push({
            name: "home"
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    username: {
      get() {
        return this.$store.state.inputs.username;
      },
      set(value) {
        this.$store.commit("changeInput", { name: "username", value });
      }
    },
    password: {
      get() {
        return this.$store.state.inputs.password;
      },
      set(value) {
        this.$store.commit("changeInput", { name: "password", value });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./LoginForm.scss";
</style>
