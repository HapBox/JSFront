<template>
  <div id="nav">
    <router-link to="/"> Список дел </router-link>
    <router-link to="/info"> Инфо </router-link>
    <a @click="onLogoutClicked"> Выход </a>
  </div>
</template>

<script>
import { doLogout } from "@/netClient/dataService";
export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>


<style>
/* #nav {
  margin-left: auto;
  margin-right: auto;
  position: fixed;
} */
/* router-link {
  padding: 100px 200px;
  margin: 200px;
} */
</style>