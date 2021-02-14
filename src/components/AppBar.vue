<template>
  <v-app-bar app>
    <router-link to="/"> logo here </router-link>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <router-link to="/services" class="mx-2"> Services </router-link>
      <router-link to="/docs" class="mx-2"> Docs </router-link>
      <router-link to="/api" class="mx-2"> API </router-link>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <UserDropDown></UserDropDown>
    </div>
  </v-app-bar>
</template>

<script>
import UserDropDown from "@/components/UserDropDown.vue";

export default {
  components: {
    UserDropDown
  }
};
</script>
