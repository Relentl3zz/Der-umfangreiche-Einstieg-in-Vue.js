<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="modelValue"
      v-on:click="$emit('update:modelValue', !modelValue)"
    />
    {{ todo.title }}
    <button v-on:click="$emit('onDeleteToDo', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    modelValue: Boolean,
  },
};
</script>

<style></style>
