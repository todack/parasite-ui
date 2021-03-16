<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <DataInput></DataInput>
      </v-col>
      <v-col class="black" cols="12">
        <Guide></Guide>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataInput from "@/components/request/DataInput.vue";
import Guide from "@/components/request/Guide.vue";

export default {
  components: {
    DataInput,
    Guide
  }
};
</script>
