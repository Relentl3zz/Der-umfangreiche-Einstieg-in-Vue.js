<template>
  <div>
    <h1>ToDo Details {{ $route.params.id }}</h1>
    <input v-bind:value="todo.title" v-on:keyup.enter="onChangeTitle" />
  </div>
</template>

<script>
export default {
  methods: {
    onChangeTitle(e) {
      this.$store.dispatch("changeTitle", {
        id: Number(this.$route.params.id),
        title: e.target.value,
      });
    },
  },
  computed: {
    todo() {
      return this.$store.getters.getToDoById(Number(this.$route.params.id));
    },
  },
};
</script>

<style></style>
