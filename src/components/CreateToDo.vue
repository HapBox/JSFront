<template>
  <section class="create-todo">
    <input v-model="name" type="text" placeholder="Название дела" />
    <button @click="onCreateToDoClicked">Создать</button>
  </section>
</template>

<script>
import { createToDo } from "@/netClient/dataService";
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