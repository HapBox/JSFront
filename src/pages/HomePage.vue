<template>
  <div class="home-page">
    <CreateToDo @todo-created="onCreateToDo" />
    <div class="separator"><hr /></div>
    <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id" class="todo-item">
        <div class="title" :class="{ done: todoItem.isDone }">
          {{ todoItem.title }}
        </div>
        <div class="actions">
          <input
            type="checkbox"
            class="checkbox"
            :checked="todoItem.isDone"
            @input="onCheckBoxInput(todoItem.id)"
          />
          <button class="delete-button" v-on:click="deleteTodo(todoItem.id)">
            X
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchToDoList, patchToDo, deleteToDo } from "@/netClient/todoService";
import CreateToDo from "@/components/CreateToDo.vue";
export default {
  name: "HomePage",
  components: {
    CreateToDo,
  },
  async created() {
    this.fetchToDoList();
  },
  data: () => ({
    todoName: "",
    todoList: [],
  }),
  methods: {
    async fetchToDoList() {
      try {
        this.todoList = await fetchToDoList();
      } catch (error) {
        console.error(error);
      }
    },
    async onCheckBoxInput(id) {
      try {
        const todo = this.todoList.find((item) => item.id === id);
        await patchToDo({ id, isDone: !todo.isDone });
        todo.isDone = !todo.isDone;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo(id) {
        try {
          await deleteToDo({id});
          this.todoList = await fetchToDoList();
        } catch (error) {
          console.error(error);
        }
    },
    async onCreateToDo(todo) {
      this.todoList.push(todo);
    },
  },
};
</script>