<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y nudge-left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">
        Login
        <v-icon right> mdi-arrow-drop-down </v-icon>
      </v-btn>
    </template>

    <v-card>
      <div>
        <v-btn> github-login </v-btn>
        <v-btn> google-login </v-btn>
      </div>
      <div v-if="loggedIn">
        <v-list>
          <v-list-item> something </v-list-item>
        </v-list>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      loggedIn: false
    };
  }
};
</script>
