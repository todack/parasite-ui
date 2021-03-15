<template>
  <v-container>
    <v-row>
      <v-subheader> Purchase API Calls </v-subheader>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="5">
        <v-text-field solo placeholder="No. of API calls"></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field solo readonly placeholder="Amount"></v-text-field>
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
        <v-text-field solo placeholder="Access Code"> </v-text-field>
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
        <v-data-table> </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
