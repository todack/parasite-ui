<template>
  <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-row justify="center" align="center">
          <v-col cols="12">
            <p class="display-2 white--text">
              Didn't find what you're looking for?
            </p>
          </v-col>
          <v-col cols="6">
            <v-card class="grey lighten-3" to="/docs">
              <v-card-title class="overline font-weight-bold">
                Contribute
              </v-card-title>
              <v-card-text class="caption font-italic">
                Create the model, host on GitHub and add it as a provider.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="grey lighten-3"
              href="https://github.com/todack/parasite/issues"
              target="_blank"
            >
              <v-card-title class="overline font-weight-bold">
                Request
              </v-card-title>
              <v-card-text class="caption font-italic">
                Create an issue with a complete description of the use case.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-img class="white--text center"> [image here] </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
