<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="todo.done"
      v-on:click="$emit('input', !todo.done)"
    />
    {{ todo.title }}
    <button v-on:click="$emit('onDeleteToDo', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
};
</script>

<style></style>
