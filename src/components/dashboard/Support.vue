<template>
  <v-container>
    <v-row>
      <v-subheader> Create a support ticket </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field solo placeholder="Subject of Issue"> </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          solo
          placeholder="Describe the issue in detail..."
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn> Submit </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
