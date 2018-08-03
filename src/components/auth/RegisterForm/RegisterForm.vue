<template>
    <div>
    <div class="form">
        <div class="Logo">Vue - Register</div>
        <div class="contents">
            <div class="Line">
                <div class="Label">아이디</div>
                <div class="Input">
                    <input type="text" v-model="username" />
                </div>
            </div>
            <div class="Line">
                <div class="Label">패스워드</div>
                <div class="Input">
                    <input type="password" v-model="password" />
                </div>
            </div>
            <div class="Line">
                <div class="Label">패스워드 확인</div>
                <div class="Input">
                    <input type="password" v-model="passwordConfirm" v-on:keypress.enter="register" />
                </div>
            </div>
            <div class="Button" @click="this.register">Register</div>
        </div>
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
    async register() {
      try {
        await this.$store.dispatch("register", {
          username: this.$store.state.inputs.username,
          password: this.$store.state.inputs.password,
          passwordConfirm: this.$store.state.inputs.passwordConfirm
        });
        if (this.$store.state.register.success) {
          this.$router.push("login");
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
    },
    passwordConfirm: {
      get() {
        return this.$store.state.inputs.passwordConfirm;
      },
      set(value) {
        this.$store.commit("changeInput", { name: "passwordConfirm", value });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./RegisterForm.scss";
</style>