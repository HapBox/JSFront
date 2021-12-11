<template>
  <form class="registartion-form" @submit.prevent="onFormSubmit">
    <div class="form-field">
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="email">Почта</label>
      <input v-model="email" id="email" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" required />
    </div>
    <div>
      <span style="color: red"> {{ $root.errorMessage }} </span>
    </div>
    <button type="submit">Зарегистрироваться</button>
    <div class="action-link">
      <span>Есть аккаунт? </span>
      <a class="link-btn" @click="redirect">Авторизоваться</a>
    </div>
  </form>
</template>

<script>
import { doRegister } from "@/netClient/dataService";
export default {
  name: "RegistrationPage",
  async mounted() {},
  data: () => ({
    login: "",
    email: "",
    password: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
          this.login.trim(),
          this.email.trim(),
          this.password.trim()
        );
        this.$router.push("/login");
        console.warn({ data });
      } catch (error) {
        this.$root.errorMessage = error.response.data.message;
        console.error(error);
      }
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>