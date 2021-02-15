<template>
  <v-container>
    <DataInput></DataInput>
    <Guide></Guide>
    <About></About>
  </v-container>
</template>

<script>
import DataInput from "@/components/request/DataInput.vue";
import Guide from "@/components/request/Guide.vue";
import About from "@/components/request/About.vue";

export default {
  components: {
    DataInput,
    Guide,
    About
  }
};
</script>
