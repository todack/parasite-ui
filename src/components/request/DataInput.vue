<template>
  <v-container>
    <v-row justify="space-between" align="center" class="mt-5">
      <v-col cols="auto">
        <v-subheader class="display-1"> {{ serviceDetails.name }} </v-subheader>
      </v-col>
      <v-col cols="auto">
        <v-btn class="mx-5" dark large @click="submitRequest">
          Submit Request
        </v-btn>
      </v-col>
    </v-row>
    <v-row><v-divider></v-divider></v-row>
    <v-row justify="space-around" align="center" class="mt-8">
      <v-col cols="6">
        <v-card>
          <v-card-title> File Upload </v-card-title>
          <v-card-subtitle>
            Select a file from this device to upload
          </v-card-subtitle>
          <v-card-text>
            <v-file-input
              outlined
              dense
              label="Click to select files"
              v-model="file"
            ></v-file-input>
            <p>Add checks here.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title> Resource URL </v-card-title>
          <v-card-subtitle>
            Point to a downloadable resource URL
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
              outlined
              dense
              v-model="resourceUrl"
              label="Paste the URL"
            ></v-text-field>
            <p>Add checks here.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row> </v-row>
    <v-row>
      <v-col>
        <v-radio-group label="Inference Mode" mandatory v-model="mode" row>
          <v-radio label="Single" value="single"></v-radio>
          <v-radio disabled label="Batch" value="batch"></v-radio>
          <v-radio disabled label="Stream" value="stream"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["serviceDetails"],
  data() {
    return {
      file: null,
      resourceUrl: null,
      mode: "single"
    };
  },
  methods: {
    async submitRequest() {
      let data = new FormData();
      data.append("mode", this.mode);

      if (this.file && this.resourceUrl) {
        // failedValidation
      } else if (this.file) {
        data.append("sourceType", "file");
        data.append("source", this.file);
      } else if (this.resourceUrl) {
        data.append("sourceType", "url");
        data.append("source", this.resourceUrl);
      } else {
        // failedValidation
      }

      try {
        let requestId = await this.$store.dispatch("requestService", {
          domainId: this.$route.params.domainId,
          data
        });
        this.$router.push(`/result/${requestId}`);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
