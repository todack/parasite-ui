<template>
  <v-container class="mt-10">
    <div v-for="group in groups" :key="group.name">
      <v-row>
        <v-subheader class="headline"> {{ group.name }} </v-subheader>
      </v-row>
      <v-row class="mb-5"><v-divider></v-divider></v-row>
      <v-row justify="start" align="center" class="mb-10">
        <v-col cols="3" v-for="domain in group.domains" :key="domain.name">
          <v-card dark to="/request">
            <v-card-title class="overline"> {{ domain.name }} </v-card-title>
            <v-card-subtitle class="font-italic caption">
              {{ domain.providersCount + " Providers" }}
            </v-card-subtitle>
            <v-card-text style="overflow-y:hidden; height: 10vh">
              {{ domain.desc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          name: "Computer Vision",
          domains: [
            {
              name: "Image Recognition",
              providersCount: 0,
              desc: "Labels an image into one of the available categories."
            },
            {
              name: "Image Summarizer",
              providersCount: 0,
              desc: "Generates a summary of the content of the image."
            }
          ]
        },
        {
          name: "Natural Language Processing",
          domains: [
            {
              name: "Language Translation",
              providersCount: 0,
              desc: "Translates the text from one language to another."
            },
            {
              name: "Sentiment Analysis",
              providersCount: 0,
              desc: "Determines the sentiment of the text."
            }
          ]
        },
        {
          name: "Time Series Analysis",
          domains: [
            {
              name: "Series Continuation",
              providersCount: 0,
              desc: "Predicts the next value in the series of data."
            }
          ]
        }
      ]
    };
  }
};
</script>
