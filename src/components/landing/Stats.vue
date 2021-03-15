<template>
  <v-container fluid class="my-12">
    <v-row justify="space-around" align="center" class="my-12">
      <v-col cols="6">
        <div class="display-1 font-weight-black text-center font-italic">
          The data may not contain the answer. The combination of some data and
          an aching desire for an answer does not ensure that a resonable answer
          can be extracted from a given body of data.
        </div>
        <div class="overline text-center mt-12 font-weight-black">
          John Tukey
        </div>
      </v-col>
      <v-col cols="5">
        <v-row justify="center" align="center">
          <v-col v-for="card in cards" cols="6" :key="card.title">
            <v-card dark height="25vh" width="25vw">
              <div
                class="fill-height d-flex flex-column align-center justify-center"
              >
                <div class="display-2 font-weight-bold">{{ card.count }}</div>
                <div class="overline font-weight-bold mt-5">
                  {{ card.title }}
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Datasets",
          count: 0
        },
        {
          title: "Inference Minutes",
          count: 0
        },
        {
          title: "Providers",
          count: 0
        },
        {
          title: "Services",
          count: 0
        }
      ]
    };
  }
};
</script>

<style scoped></style>
