<template>
    <div class="wrapper">
        <register-form />
    </div>
</template>

<script>
import RegisterForm from "@/components/auth/RegisterForm/RegisterForm.vue";
export default {
  components: {
    RegisterForm
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