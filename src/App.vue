<template>
  <v-app>
    <v-app-bar app color="red darken-1" dark></v-app-bar>

    <v-main>
      <v-container>
        <AppHeader />
      </v-container>
      <v-container>
        <search-results />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchResults from "./components/SearchResults";
import AppHeader from "./components/AppHeader";

export default {
  components: {
    SearchResults,
    AppHeader
  }
};
</script>