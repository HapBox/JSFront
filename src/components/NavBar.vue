<template>
  <div id="nav">
    <router-link  to="/"> Список дел </router-link>
    <router-link  to="/info"> Инфо </router-link>
    <a @click="onLogoutClicked"> Выход </a>
  </div>
</template>

<script>
import { doLogout } from "@/netClient/authService";
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
