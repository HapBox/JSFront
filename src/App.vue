<template>
  <div id="main">
    <div class="base-card">
      <div class="card_details">
        <div class="name">Матяш Никита Дмитриевич</div>
        <div class="group">БСБО-06-19</div>
        <div class="photo"><img src="./assets/moefoto.jpg" width="100" /></div>
        <div class="text">Мои умения:</div>
        <ul>
          <li>Основы C#</li>
          <li>Основы Python</li>
          <li>Основы Java</li>
          <li>Отлично готовлю</li>
        </ul>
      </div>
    </div>
    <div class="base-card">
      <div class="text_form">Форма обратной связи</div>
      <form>
        <div class="form-field">
          <input type="text" placeholder="Ваше имя" id="name" required />
        </div>
        <div class="form-field">
          <input type="text" placeholder="Ваш email" id="mail" required />
        </div>
        <div class="form-field">
          <textarea id="text" placeholder="Сопроводительное письмо" required></textarea>
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
.name {
  font-size: 1.25rem;
}
.group {
  font-weight: 700;
}
.card_details > div {
  margin: 8px 0;
}
.text_form {
  margin: 8px;
  font-size: 1.25rem;
}
.submit > input {
  border: 1px solid black;
  background: #e7e9eb;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 15px;
}
.submit > input:hover {
  border: 1px solid black;
  background: #bbbbbd;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 15px;
}
.submit > input:active {
  border: 1px solid black;
  background: #bbbbbd;
  border-radius: 8px;
  padding: 12px 16px;
  margin: 15px;
}
.base-card {
  padding: 10px 20px;
  margin: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);  
  background: turquoise;
  border-radius: 8px;
}
.form-field input, textarea {
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  width: 70%;
  margin: 5px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 4px 28px;
}
.photo > img {
  border-radius: 8px;
}
li {
  text-align: left;
}
</style>