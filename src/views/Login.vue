<template>
    <div class="wrapper">
        <login-form />
    </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm/LoginForm.vue";
export default {
  components: {
    LoginForm
  },
  mounted() {
    this.checkLogged();
  },
  methods: {
    checkLogged() {
      let logged = this.$store.state.login.logged;
      if (logged) {
        this.$router.push({
          name: "home"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Login.scss";
</style>