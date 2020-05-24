import Vue from "vue";
import Vuex from "vuex";
import ToDoService from "@/Services/ToDoService.js";
import Router from "@/router/index.js";

Vue.use(Vuex);

export default {
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
    TOGGLE_TODO(state, data) {
      state.todos[state.todos.findIndex((item) => item.id === data.id)].done =
        data.done;
    },
    SET_SEARCHQUERY(state, query) {
      state.searchQuery = query;
    },
    SET_TITLE(state, data) {
      state.todos[state.todos.findIndex((item) => item.id === data.id)].title =
        data.title;
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
    deleteToDo({ commit }, id) {
      ToDoService.deleteToDo(id)
        .then(() => commit("DELETE_TODO", id))
        .catch((Error) => console.log(Error));
    },
    toggleToDo({ commit }, todo) {
      ToDoService.updateToDo(todo).then(({ data }) =>
        commit("TOGGLE_TODO", data)
      );
    },
    changeTitle({ commit }, todo) {
      ToDoService.updateToDo(todo)
        .then(({ data }) => commit("SET_TITLE", data))
        .catch((Error) => console.log(Error))
        .finally(() => Router.push("/"));
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
    getToDoById: (state) => (id) => {
      return state.todos.find((item) => item.id === id);
    },
  },
};
