<template>
  <v-app flat>
    <AppBar></AppBar>
    <v-main app>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  components: {
    AppBar
  }
};
</script>
