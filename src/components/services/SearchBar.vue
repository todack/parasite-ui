<template>
  <v-container class="my-12 px-12">
    <v-text-field
      hide-details
      label="Search for a service"
      solo
      v-model="searchText"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  computed: {
    searchText: {
      get() {
        return this.$store.state.searchText;
      },
      set(newVal) {
        this.$store.commit("setSearchText", newVal);
      }
    }
  }
};
</script>
