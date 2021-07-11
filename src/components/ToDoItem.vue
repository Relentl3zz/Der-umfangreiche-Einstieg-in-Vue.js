<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="modelValue"
      v-on:click="toggleTodo"
    />
    {{ todo.title }}
    <button v-on:click="deleteToDo(todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    modelValue: Boolean,
  },
  setup(props, context) {
    const toggleTodo = () =>
      context.emit("update:modelValue", !props.modelValue);
    const deleteTodo = (id) => context.emit("onDeleteToDo", id);
    return { deleteTodo, toggleTodo };
  },
};
</script>

<style></style>
