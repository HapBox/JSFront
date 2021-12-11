<template>
  <div class="card">
    <div class="text_form">Форма обратной связи</div>
    <form>
      <div class="form-field">
        <input type="text" placeholder="Ваше имя" id="name" required />
      </div>
      <div class="form-field">
        <input type="text" placeholder="Ваш email" id="mail" required />
      </div>
      <div class="form-field">
        <textarea
          id="text"
          placeholder="Сопроводительное письмо"
          required
        ></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Отправить!" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormCard',
  props: {
    msg: String
  }
}
</script>

<style>
</style>