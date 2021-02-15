<template>
  <v-row justify="center">
    <v-col cols="3" v-for="n in 4" :key="n">
      <v-card to="/request">
        <v-card-title> [service name here.] </v-card-title>
        <v-card-text> [service img here.] </v-card-text>
        <v-card-actions> [service description bulleted here.] </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
