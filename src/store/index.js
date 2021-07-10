import { createStore } from "vuex";
import todo from "@/store/modules/ToDo.js";

export default new createStore({
  modules: {
    todo,
  },
});
