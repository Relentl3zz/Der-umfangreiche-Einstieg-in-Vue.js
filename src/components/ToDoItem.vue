<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="todo.done"
      @change="onToggleToDo(todo.id, todo.done)"
    />
    <router-link :to="{ name: 'ToDo-Details', params: { id: todo.id } }">
      {{ todo.title }}
    </router-link>
    <button v-on:click="onDeleteToDo(todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDeleteToDo(id) {
      this.$store.dispatch("deleteToDo", id);
    },
    onToggleToDo(id, done) {
      this.$store.dispatch("toggleToDo", { id, done: !done });
    },
  },
};
</script>

<style></style>
