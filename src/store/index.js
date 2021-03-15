import Vue from "vue";
import Vuex from "vuex";


import { FAKE_SEARCH_RESULTS, FAKE_MOVIE_DETAILS } from "./FAKE_DATA";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "home alone",
    searchResults: FAKE_SEARCH_RESULTS,
    movieDetails: FAKE_MOVIE_DETAILS,
    reviews: [],
  },
  mutations: {
    setSearchTerm(state, payload) {
      state.searchTerm = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    setMovieDetails(state, payload) {
      state.movieDetails = payload;
    },
    setMovieReviews(state, payload) {
      state.reviews = payload;
    }
  },
  actions: {
    async searchMovies({ commit }, payload) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = process.env.VUE_APP_MOVIE_API_KEY;
      const url = `${apiBaseUrl}/search/movie?query=${payload}&api_key=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();
      commit("setSearchTerm", payload);
      commit("setSearchResults", data);
    }
  },
  modules: {}
});
