<template>
  <div id="nav">
    <router-link to="/"> Список дел </router-link>
    <router-link to="/info"> Инфо </router-link>
    <router-link to="/login"> Логин </router-link>
    <router-link to="/registration"> Регистрация </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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