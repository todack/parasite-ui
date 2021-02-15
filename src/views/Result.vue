<template>
  <v-container>
    <Analysis></Analysis>
    <Response></Response>
  </v-container>
</template>

<script>
import Analysis from "@/components/result/Analysis.vue";
import Response from "@/components/result/Response.vue";

export default {
  components: {
    Analysis,
    Response
  }
};
</script>
