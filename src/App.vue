<template>
  <div>
    <h1>
      Hello World
      <span v-bind:style="{ color: favoriteColor }"> {{ message }} </span>
      <p v-bind:style="{ color: errorColor }" v-if="errorColor === 'red'">
        FEHLER
      </p>
      <p v-else v-bind:style="{ color: errorColor }">ERFOLG</p>
    </h1>

    <div v-for="(todo, index) in todos" :key="index">{{ todo.title }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Benny",
      favoriteColor: "green",
      errorColor: "green",
      todos: [
        { title: "HTML, CSS & JS lernen" },
        { title: "Vue lernen" },
        { title: "Next facebook bauen" },
      ],
    };
  },
};
</script>

<style></style>
