<template>
  <div class="card">
    <div class="card_details">
      <div class="name">Матяш Никита Дмитриевич</div>
      <div class="group">БСБО-06-19</div>
      <div class="photo"><img src="../assets/moefoto.jpg" width="100" /></div>
      <div class="text">Мои умения:</div>
      <ul>
        <li>Основы C#</li>
        <li>Основы Python</li>
        <li>Основы Java</li>
        <li>Отлично готовлю</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    msg: String,
  },
};
</script>

<style>
.name {
  font-size: 1.25rem;
}
.group {
  font-weight: 700;
}
.photo > img {
  border-radius: 8px;
}
li {
  text-align: left;
}
.card_details > div {
  margin: 8px 0;
}
</style>
