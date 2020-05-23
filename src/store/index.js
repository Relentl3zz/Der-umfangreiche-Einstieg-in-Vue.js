import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "HTML, CSS & JS lernen", done: false },
      { id: 2, title: "Vue lernen", done: false },
      { id: 3, title: "Next facebook bauen", done: true },
      { id: 4, title: "Vue aufgabe erledigt", done: true },
      { id: 5, title: "Vue computed properties gelernt", done: true },
    ],
    counter: 6,
    searchQuery: "",
  },
  mutations: {
    ADD_TODO(e) {
      this.todos.push({ id: this.counter++, title: e.target.value });
      e.target.value = "";
    },
    DELETE_TODO(id) {
      this.todos.splice(
        this.todos.findIndex((item) => item.id === id),
        1
      );
    },
  },
  actions: {},
  getters: {
    activeToDos: (state) => {
      return state.todos.filter((item) => !item.done);
    },
    doneToDos: (state) => {
      return state.todos.filter((item) => item.done);
    },
    filteredToDos: (state) => {
      return state.todos.filter((item) =>
        item.title.toLowerCase().startsWith(state.searchQuery.toLowerCase())
      );
    },
  },
});
