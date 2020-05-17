<template>
  <h1>
    Hello World
    <span v-bind:style="{ color: favoriteColor }"> {{ message }} </span>
    <p v-bind:style="{ color: errorColor }" v-if="errorColor === 'red'">
      FEHLER
    </p>
    <p v-else v-bind:style="{ color: errorColor }">ERFOLG</p>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Benny",
      favoriteColor: "green",
      errorColor: "green",
    };
  },
};
</script>

<style></style>
