<template>
  <v-container fluid>
    <v-row>
      <v-col class="black" cols="12">
        <SearchBar></SearchBar>
      </v-col>
      <v-col cols="12">
        <ServiceList></ServiceList>
      </v-col>
      <v-col class="black" cols="12">
        <ServiceRequest></ServiceRequest>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBar from "@/components/services/SearchBar";
import ServiceList from "@/components/services/ServiceList";
import ServiceRequest from "@/components/services/ServiceRequest";

export default {
  components: {
    SearchBar,
    ServiceList,
    ServiceRequest
  }
};
</script>
