<template>
  <v-container>
    <v-row>
      <v-subheader> Contribute Provider </v-subheader>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-select
          dense
          outlined
          :items="domainsList"
          item-value="_id"
          item-text="name"
          v-model="domain"
          label="Select domain"
        >
        </v-select>
      </v-col>
      <v-col cols="8">
        <v-text-field
          outlined
          dense
          v-model="name"
          label="Provider's Name"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-select
          dense
          outlined
          :items="formatsList"
          v-model="format"
          label="Select format"
        >
        </v-select>
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-if="format"
          outlined
          dense
          label="Source URL"
          v-model="sourceUrl"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-select
          dense
          outlined
          :items="authMethodsList"
          v-model="authMethod"
          label="Select authorization method"
        ></v-select>
      </v-col>
      <v-col cols="8">
        <div v-if="authMethod === 'noAuth'">
          <v-checkbox
            v-model="noAuthCheck"
            label="I confirm that the provider is publicly accessible."
            class="mt-0"
          ></v-checkbox>
        </div>
        <div v-else-if="authMethod === 'basic'">
          <v-text-field
            outlined
            dense
            label="Username"
            v-model="basicUsername"
          ></v-text-field>
          <v-text-field
            outlined
            dense
            label="Password"
            v-model="basicPassword"
          ></v-text-field>
        </div>
        <div v-else-if="authMethod === 'token'">
          <v-text-field
            outlined
            dense
            label="Authorization Token"
            v-model="authToken"
          ></v-text-field>
        </div>
        <div v-else></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          dense
          outlined
          v-model="description"
          label="Description"
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
          :items="userProviders"
          :items-per-page="5"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  async created() {
    if (this.$store.state.domainsList) {
      await Promise.all([
        this.$store.dispatch("fetchDomainsList"),
        this.$store.dispatch("fetchUserProviders")
      ]);
    }
  },
  data() {
    return {
      description: null,
      domain: null,
      sourceUrl: null,
      basicUsername: null,
      basicPassword: null,
      authToken: null,
      noAuthCheck: false,
      format: null,
      name: null,
      formatsList: [
        {
          text: "Public API",
          value: "api"
        },
        {
          text: "Github Hosted",
          value: "github"
        }
      ],
      authMethod: null,
      authMethodsList: [
        {
          text: "None (Auth not required)",
          value: "noAuth"
        },
        {
          text: "Basic Authorization",
          value: "basic"
        },
        {
          text: "Access Token",
          value: "token"
        }
      ],
      tableHeaders: [
        {
          text: "ID",
          value: "_id"
        },
        {
          text: "Name",
          value: "name"
        },
        // {
        //   text: "Domain Name",
        //   value: "domainName"
        // },
        {
          text: "Format",
          value: "format"
        },
        {
          text: "Auth Method",
          value: "auth.kind"
        },
        {
          text: "Hits",
          value: "hits"
        },
        {
          text: "Misses",
          value: "misses"
        }
      ]
    };
  },
  computed: {
    ...mapState(["domainsList", "userProviders"])
  },
  methods: {
    async submitForReview() {
      let data = {
        authorId: this.$store.state.userData._id,
        domainId: this.domain,
        name: this.name,
        sourceUrl: this.sourceUrl,
        format: this.format,
        description: this.description
      };

      if (this.authMethod === "basic") {
        data.auth = {
          kind: "basic",
          username: this.basicUsername,
          password: this.basicPassword
        };
      } else if (this.authMethod === "token") {
        data.auth = {
          kind: "token",
          token: this.authToken
        };
      } else {
        // no auth
        data.auth = {
          kind: "none"
        };
      }

      console.log(data);
      try {
        await this.$store.dispatch("createProvider", data);
        this.domain = this.sourceUrl = this.name = null;
        this.basicUsername = this.basicPassword = null;
        this.format = this.authMethod = this.description = null;
        this.inputCheck = this.noAuthCheck = false;
      } catch (e) {
        // show them in the respective text field.
        console.log(e);
      }
    }
  }
};
</script>
