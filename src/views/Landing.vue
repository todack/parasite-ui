<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="fullscreen py-0">
        <Header></Header>
      </v-col>
      <v-col cols="12" class="black">
        <Working></Working>
      </v-col>
      <v-col cols="12">
        <Stats></Stats>
      </v-col>
      <v-col cols="12" class="black">
        <Footer></Footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "@/components/landing/Header.vue";
import Working from "@/components/landing/Working.vue";
import Stats from "@/components/landing/Stats.vue";
import Footer from "@/components/landing/Footer.vue";

export default {
  components: {
    Header,
    Working,
    Stats,
    Footer
  }
};
</script>

<style scoped>
.fullscreen {
  height: calc(100vh - 64px);
}
</style>
