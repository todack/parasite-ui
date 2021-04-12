<template>
  <v-container>
    <v-row>
      <v-subheader> Create a support ticket </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field dense outlined label="Subject"> </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea dense outlined label="Description"></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn dark> Submit </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
