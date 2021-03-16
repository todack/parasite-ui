<template>
  <v-container class="my-5">
    <v-row class="my-5">
      <v-subheader class="display-1"> {{ serviceDetails.name }} </v-subheader>
    </v-row>
    <v-row> <v-divider></v-divider> </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-subheader> Data Inputs </v-subheader>
      </v-col>
      <v-col cols="4">
        <v-file-input
          dense
          solo
          clearable
          placeholder="Select files from local device"
        ></v-file-input>
      </v-col>
      <v-col cols="1">
        <p class="text-center">or</p>
      </v-col>
      <v-col cols="4">
        <v-text-field
          dense
          solo
          placeholder="Enter a downloadable file URL"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn dark small> Check files </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader> Prediction Metrics </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-combobox
          solo
          dense
          multiple
          :items="serviceDetails.metrics"
          placeholder="Select the metrics"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader> Custom Comparator </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-select
          solo
          dense
          hide-details
          placeholder="Select a language"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-textarea
          solo
          placeholder="Paste your custom comparator"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn dark x-large to="/result"> Submit Request </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      serviceDetails: {
        name: "Image Classification",
        metrics: ["Accuracy", "Precision", "Recall", "AUC"]
      }
    };
  }
};
</script>
