<template>
  <v-container>
    <v-row>
      <v-subheader> Contribute Provider </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-select
          dense
          solo
          :items="domainsList"
          v-model="domain"
          placeholder="Select domain"
        >
        </v-select>
      </v-col>
      <v-col cols="8">
        <keep-alive>
          <component v-if="domain" :is="domainComponent"></component>
        </keep-alive>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-select
          dense
          solo
          :items="formatsList"
          v-model="format"
          placeholder="Select format"
        >
        </v-select>
      </v-col>
      <v-col cols="8">
        <!-- github, api -->
        <keep-alive>
          <component v-if="format" :is="formatComponent"></component>
        </keep-alive>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-select
          dense
          solo
          :items="authMethodsList"
          v-model="authMethod"
          placeholder="Select authorization method"
        ></v-select>
      </v-col>
      <v-col cols="8">
        <keep-alive>
          <component v-if="authMethod" :is="authMethodComponent"></component>
        </keep-alive>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          dense
          solo
          v-model="description"
          placeholder="Describe how is it different from other providers."
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn dark @click="submitForReview"> Submit for Review </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-subheader> Previous Contributions </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="tableHeaders"
          :items="tableItems"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Github from "./providerFormats/Github.vue";
import Api from "./providerFormats/Api.vue";
import Dummi from "./domainClassConfigs/Dummi.vue";
import AccessToken from "./authMethods/AccessToken.vue";
import BasicAuth from "./authMethods/BasicAuth.vue";
import NoAuth from "./authMethods/NoAuth.vue";

export default {
  components: {
    Github,
    Api,
    Dummi,
    AccessToken,
    BasicAuth,
    NoAuth
  },
  data() {
    return {
      description: null,
      domain: null,
      domainsList: [
        {
          text: "Dummi",
          value: "Dummi"
        }
      ],
      format: null,
      formatsList: [
        {
          text: "Public API",
          value: "Api"
        },
        {
          text: "Github Hosted",
          value: "Github"
        }
      ],
      authMethod: null,
      authMethodsList: [
        {
          text: "None (Auth not required)",
          value: "NoAuth"
        },
        {
          text: "Basic Authorization",
          value: "BasicAuth"
        },
        {
          text: "Access Token",
          value: "AccessToken"
        }
      ],
      tableHeaders: [
        {
          text: "ID",
          value: "_id"
        },
        {
          text: "Domain Name",
          value: "domainName"
        },
        {
          text: "Format",
          value: "format"
        },
        {
          text: "Auth Method",
          value: "authMethod"
        },
        {
          text: "Hits",
          value: "hits"
        },
        {
          text: "Misses",
          value: "misses"
        }
      ],
      tableItems: []
    };
  },
  computed: {
    domainComponent() {
      return this.domain;
    },
    formatComponent() {
      return this.format;
    },
    authMethodComponent() {
      return this.authMethod;
    }
  },
  methods: {
    submitForReview() {
      console.log("It's working");
    }
  }
};
</script>
