<template>
  <h1>
    Hello World
    <span v-bind:style="{ color: favoriteColor }"> {{ message }} </span>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Benny",
      favoriteColor: "green",
    };
  },
};
</script>

<style></style>
