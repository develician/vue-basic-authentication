<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="this.$store.state.login.logged" class="logoutButton" @click="logout">Logout</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        window.location.href = "/auth/login";
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logoutButton {
  background: $oc-teal-5;
  width: 20%;
  margin: 0 auto;
  user-select: none;
  cursor: pointer;
}
</style>
