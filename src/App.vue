<template>
  <div id="main">
    <div id="my_card">
      <p>Матяш Никита Дмитриевич</p>
      <p>БСБО-06-19</p>
      <img src="./assets/moefoto.jpg" width="100" />
      <p>Мои умения</p>
      <ul>
        <li>Основы C#</li>
        <li>Основы Python</li>
        <li>Основы Java</li>
        <li>Отлично готовлю</li>
      </ul>
    </div>
    <div id="back_form">
      <p>Форма обратной связи</p>
      <form>
        <div class="form-field">
          <!-- <label for="name">Ваше имя </label> -->
          <input type="text" placeholder="Ваше имя" id="name" required />
        </div>
        <div class="form-field">
          <!-- <label for="mail">Ваш email </label> -->
          <input type="text" placeholder="Ваш email" id="mail" required />
        </div>
        <div class="form-field">
          <!-- <label for="text">Сопроводительное письмо</label> -->
          <br />
          <textarea id="text" placeholder="Сопроводительное письмо" required> </textarea>
        </div>
        <div class="submit">
          <input type="submit" value="Отправить!" />
        </div>
      </form>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style>
#main {
  display: block;
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  /* margin-top: 60px; */
}
@media only screen and (min-width: 1024px) {
  #main {
    display: flex;
  }
}
.submit > input {
  border: 1px solid black;
  background: #e7e9eb;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 2%;
}
.submit > input:hover {
  border: 1px solid black;
  background: #bbbbbd;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 2%;
}
.submit > input:active {
  border: 1px solid black;
  background: #bbbbbd;
  border-radius: 8px;
  padding: 12px 16px;
  margin: 2%;
}
#my_card {
  display: flexbox;
  padding: 2%;
  margin: 1%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  background: turquoise;
  border-radius: 8px;
}
#back_form {
  display: flexbox;
  padding: 2%;
  margin: 1%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  background: tomato;
}
.form-field > input {
  outline: none;
  margin: 4px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 4px 28px;
}
textarea {
  outline: none;
  border: 2px solid black;
  border-radius: 12px;
  padding: 4px 8px;
  width: 200px;
  height: 80px;
}
img {
  border-radius: 8px;
}
li {
  text-align: left;
}
</style>
