<template>
  <v-container>
    <v-row>
      <v-col class="pink" cols="3">
        <NavBar></NavBar>
      </v-col>
      <v-col cols="9">
        <Pages></Pages>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from "@/components/docs/NavBar.vue";
import Pages from "@/components/docs/Pages.vue";

export default {
  components: {
    NavBar,
    Pages
  }
};
</script>
