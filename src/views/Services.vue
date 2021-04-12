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

import { mapActions, mapGetters } from "vuex";

export default {
  async created() {
    await this.fetchData();
  },
  components: {
    SearchBar,
    ServiceList,
    ServiceRequest
  },
  data() {
    return {
      loading: false,
      error: null
    };
  },
  computed: {
    // Just saving in global state to reduce
    // api calls when route changes. Ex: services -> docs -> services.
    ...mapGetters(["domainsList"])
  },
  methods: {
    ...mapActions(["fetchDomainsList"]),
    async fetchData() {
      this.loading = true;
      try {
        await this.fetchDomainsList();
      } catch (e) {
        this.error = e.toString();
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
