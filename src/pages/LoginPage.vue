<template>
  <form class="login-form" @submit.prevent="onFormSubmit">
    <div class="form-field">
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" required />
    </div>
    <div>
      <span style="color: red"> {{ $root.errorMessage }} </span>
    </div>
    <button type="submit">Войти</button>
    <div class="action-link">
      <span>Нет аккаунта? </span>
      <a class="link-btn" @click="redirect">Зарегистрироваться</a>
    </div>
  </form>
</template>

<script>
import { doLogin } from "@/netClient/dataService";
export default {
  name: "LoginPage",
  async mounted() {},
  data: () => ({
    login: "",
    password: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const data = await doLogin(
          this.login.trim(),
          this.password.trim()
        );
        this.$router.push("/");
        console.warn({ data });
      } catch (error) {
        this.$root.errorMessage = error.response.data.message;
        console.error(error);
      }
    },
    redirect() {
      this.$router.push("/registration");
    },
  },
};
</script>