<template>
  <div>
    <div v-for="(todo, index) in todos" :key="index">{{ todo.title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { title: "HTML, CSS & JS lernen" },
        { title: "Vue lernen" },
        { title: "Next facebook bauen" },
      ],
      counter: 0,
    };
  },
};
</script>

<style></style>
