<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="router">Home</router-link>
      <router-link v-if="!this.$store.state.login.logged" to="/auth/login" class="router">Login</router-link>
      <router-link v-if="!this.$store.state.login.logged" to="/auth/register" class="router">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkLogged();
  },
  methods: {
    async checkLogged() {
      console.log("Check logged");
      const loggedInfo = JSON.parse(localStorage.getItem("loggedInfo"));
      if (loggedInfo) {
        this.$store.dispatch("setLogged");
        return;
      }
      try {
        await this.$store.dispatch("checkLogged", {});
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.router + .router {
  margin-left: 1rem;
}
</style>
