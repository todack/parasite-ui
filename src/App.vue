<template>
  <v-app flat>
    <AppBar></AppBar>
    <v-main app>
      <v-banner
        app
        single-line
        transition="slide-y-transition"
        v-model="banner"
      >
        <v-icon slot="icon"> mdi-information </v-icon>
        {{ bannerText }}
        <template v-slot:actions="{ dismiss }">
          <v-btn text fab small @click="dismiss"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </template>
      </v-banner>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import AppBar from "@/components/AppBar.vue";

export default {
  components: {
    AppBar
  },
  computed: {
    ...mapState(["bannerText"]),
    banner: {
      get() {
        return this.$store.state.bannerText.length > 0;
      },
      set() {
        return this.$store.dispatch("setBannerText", "");
      }
    }
  }
};
</script>
