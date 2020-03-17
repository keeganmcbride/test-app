import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: { language: "Eesti", code: "ee" },
    availableLanguages: [
      { language: "Eesti", code: "ee" },
      { language: "English", code: "en" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
