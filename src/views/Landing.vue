<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="blue" cols="12">
          <Header></Header>
        </v-col>
        <v-col class="green" cols="12">
          <Working></Working>
        </v-col>
        <v-col class="pink" cols="12">
          <Stats></Stats>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
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
