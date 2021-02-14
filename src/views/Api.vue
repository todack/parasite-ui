<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <KeysInfo></KeysInfo>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <UsageInfo></UsageInfo>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KeysInfo from "@/components/api/KeysInfo.vue";
import UsageInfo from "@/components/api/UsageInfo.vue";

export default {
  components: {
    KeysInfo,
    UsageInfo
  }
};
</script>
