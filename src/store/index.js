import Vue from "vue";
import Vuex from "vuex";
import ToDoService from "@/Services/ToDoService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    searchQuery: "",
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
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
      ToDoService.getToDos()
        .then(({ data }) => commit("SET_TODOS", data))
        .catch((Error) => console.log(Error));
    },
    addToDo({ commit }, todo) {
      ToDoService.addToDo(todo)
        .then(({ data }) => commit("ADD_TODO", data))
        .catch((Error) => console.log(Error));
    },
    /* eslint-disable */
    deleteToDo({ commit }, id) {
      ToDoService.deleteToDo(id)
        .then(() => commit("DELETE_TODO", id))
        .catch((Error) => console.log(Error));
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
