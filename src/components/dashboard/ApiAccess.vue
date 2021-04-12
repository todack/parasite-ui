<template>
  <v-container>
    <v-row>
      <v-subheader> Create new token </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-text-field
          dense
          outlined
          placeholder="Name"
          v-model="tokenName"
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-select
          multiple
          dense
          outlined
          placeholder="Select permissions"
          :items="permissionOptions"
          v-model="permissions"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-btn dark @click="createToken"> create token </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-subheader> Active Tokens </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="items"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      tokenName: null,
      permissions: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Token", value: "token" },
        { text: "Created On", value: "created" },
        { text: "Last Used", value: "timestamp" },
        { text: "Last User Agent", value: "userAgent" },
        { text: "Last IP Address", value: "ipAddress" }
      ],
      items: [],
      permissionOptions: [
        { text: "Admin Access", value: "admin" },
        { text: "Domain Access", value: "domain" }
      ]
    };
  },
  computed: {
    ...mapState(["userData"])
  },
  methods: {
    createToken() {
      console.log("Token created!");
    }
  }
};
</script>
