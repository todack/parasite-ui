<template>
  <v-container>
    <v-row>
      <v-subheader> Personal Details </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          dense
          :value="userData.email"
          readonly
          label="Email"
          outlined
        >
        </v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field dense :value="userData.username" label="Name" outlined>
        </v-text-field>
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
