<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <DataInput :service-details="serviceDetails"></DataInput>
      </v-col>
      <v-col class="black" cols="12">
        <Guide :service-details="serviceDetails"></Guide>
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
  },
  async created() {
    this.serviceDetails = await this.$store.dispatch(
      "getDomain",
      this.$route.params.domainId
    );
  },
  data() {
    return {
      serviceDetails: {
        name: null,
        className: null,
        longDesc: null,
        shortDesc: null
      }
    };
  }
};
</script>
