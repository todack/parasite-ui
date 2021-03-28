<template>
  <v-app-bar dark app>
    <v-btn text to="/" class="overline font-weight-black"> PARASITE UI </v-btn>
    <div class="d-flex ml-10">
      <v-btn text to="/services" class="mr-3"> Services </v-btn>
      <v-btn text to="/docs"> Docs </v-btn>
    </div>
    <v-spacer></v-spacer>
    <div v-if="isAuthenticated">
      <v-btn text to="/dashboard"> Dashboard </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isAuthenticated"])
  }
};
</script>
