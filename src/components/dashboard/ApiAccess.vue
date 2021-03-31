<template>
  <v-container>
    <v-row>
      <v-subheader> API Secrets </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          dense
          solo
          readonly
          placeholder="API access token"
          :value="userData.accessToken"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn> Re-Generate </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userData"])
  }
};
</script>
