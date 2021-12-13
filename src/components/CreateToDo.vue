<template>
  <div class="form-field">
    <label for="name">Создать дело </label>
    <input id="name" v-model="name" type="text" placeholder="Название дела" />
    <button  @click="onCreateToDoClicked">Создать</button>
  </div>
</template>

<script>
import { createToDo } from "@/netClient/todoService";
export default {
  name: "CreateToDo",
  data: () => ({
    name: "",
  }),
  methods: {
    async onCreateToDoClicked() {
      try {
        const newTodo = await createToDo({ title: this.name });
        console.warn(newTodo);
        this.$emit("todo-created", newTodo)
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>