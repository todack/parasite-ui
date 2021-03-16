<template>
  <v-container class="my-5">
    <v-row>
      <v-col cols="12">
        <v-subheader class="overline white--text"> Description </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="white--text body-1">{{ serviceDetails.fullDesc }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader class="overline white--text"> Specifications </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-simple-table dark dense class="white--text text-center">
          <template v-slot:default>
            <tbody>
              <tr v-for="spec in serviceDetails.specList" :key="spec.name">
                <td>{{ spec.name }}</td>
                <td>{{ spec.value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader class="overline white--text"> API Guide </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="body-1 white--text">
          Use HTTP library of the desired language to make REST API calls using
          the specified options.
        </p>
      </v-col>
      <v-col cols="8">
        <pre
          class="grey darken-4 pa-2"
        > <code class="grey darken-4 white--text"> {{ serviceDetails.codeSample }} </code> </pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      serviceDetails: {
        fullDesc: "Some stuff about the service.",
        specList: [
          {
            name: "Domain",
            value: "Image Classification"
          }
        ]
      }
    };
  }
};
</script>
