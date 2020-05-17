<template>
  <div>
    <h1>
      Hello World
      <span :style="{ color: favoriteColor }"> {{ message }} </span>
      <p :style="{ color: errorColor }" v-if="errorColor === 'red'">
        FEHLER
      </p>
      <p v-else :style="{ color: errorColor }" v-on:click="swapColor">
        ERFOLG
      </p>
    </h1>

    <div v-for="(todo, index) in todos" :key="index">{{ todo.title }}</div>
    <button @click="resetToDos">Reset</button>
    <br />
    <br />
    <input :value="message" v-on:input="setMessage" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hey, wie gehts dir",
      favoriteColor: "green",
      errorColor: "green",
      todos: [
        { title: "HTML, CSS & JS lernen" },
        { title: "Vue lernen" },
        { title: "Next facebook bauen" },
      ],
      counter: 0,
    };
  },
  methods: {
    swapColor() {
      let colorArray = ["blue", "green", "orange", "magenta", "cyan"];
      this.counter++;
      if (colorArray.length === this.counter) this.counter = 0;
      this.errorColor = colorArray[this.counter];
    },
    setMessage(e) {
      console.log(e);
      this.message = e.target.value;
    },
    resetToDos() {
      this.todos = [];
    },
  },
};
</script>

<style></style>
