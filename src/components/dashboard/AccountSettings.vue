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
            placeholder="User Name"
            solo
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            dense
            :value="userData.username"
            placeholder="User Email"
            solo
          >
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
