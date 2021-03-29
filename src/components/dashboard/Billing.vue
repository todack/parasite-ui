<template>
  <v-container>
    <v-row>
      <v-subheader> Purchase API Calls </v-subheader>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="5">
        <v-text-field
          v-model="apiCalls"
          solo
          placeholder="No. of API calls"
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field
          solo
          :value="amount"
          readonly
          placeholder="Amount"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn> Proceed </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-subheader> Redeem Credits </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          solo
          persistent-hint
          messages="Example JJMYYPX256"
          placeholder="Coupon Code"
        >
        </v-text-field>
      </v-col>
      <v-col cols="6">
        <v-btn> Redeem </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-subheader> Purchase History </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="userData.purchases">
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      apiCalls: 1,
      headers: [
        { text: "ID", value: "_id" },
        { text: "Quantity", value: "quantity", sortable: true },
        { text: "Timestamp", value: "timestamp" },
        { text: "Amount", value: "amount" },
        { text: "Method", value: "method" }
      ]
    };
  },
  computed: {
    ...mapState(["userData"]),
    amount() {
      return this.apiCalls * 0.1;
    }
  }
};
</script>
