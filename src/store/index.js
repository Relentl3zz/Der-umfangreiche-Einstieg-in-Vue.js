import Vue from "vue";
import Vuex from "vuex";
import ToDoService from "@/Services/ToDoService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    counter: 6,
    searchQuery: "",
  },
  mutations: {
    ADD_TODO(state, title) {
      state.todos.push({ id: state.counter++, title });
    },
    DELETE_TODO(state, id) {
      state.todos.splice(
        state.todos.findIndex((item) => item.id === id),
        1
      );
    },
    SET_TODOS(state, data) {
      state.todos = data;
    },
  },
  actions: {
    fetchToDos({ commit }) {
      ToDoService.getToDos().then(({ data }) => commit("SET_TODOS", data));
    },
  },
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
