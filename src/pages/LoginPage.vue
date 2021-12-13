<template>
  <form class="auth-form" @submit.prevent="onFormSubmit">
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
import { doLogin } from "@/netClient/authService";
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
        const token = await doLogin(this.login.trim(), this.password.trim());
        if (token) {
          localStorage.accessToken = token;
          this.$router.push("/");
        }
        console.warn({ token });
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