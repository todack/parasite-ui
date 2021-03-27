<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-row>
          <v-col cols="12" class="display-4 font-weight-black">
            Parasite UI
          </v-col>
          <v-col cols="12" class="display-1 font-weight-bold mt-5">
            An Unified API for Distributed & Multi-Sampled Deep Learning
            Inference
          </v-col>
          <v-col cols="10" class="mt-5">
            <v-slide-y-transition hide-on-leave leave-absolute>
              <p v-if="isAuthenticated" class="title mt-9">
                Welcome!
                <span class="font-weight-bold headline">{{ email }}</span>
              </p>
              <v-text-field
                v-else-if="isAskEmail"
                class="title"
                @keydown.enter="isAskEmail = !isAskEmail"
                v-model="email"
                append-icon="mdi-arrow-right"
                outlined
                color="grey darken-3"
                full-width
                placeholder="Email Please!"
              ></v-text-field>
              <v-text-field
                v-else-if="!isAskEmail"
                class="title"
                @keydown.enter="authHandler"
                v-model="password"
                append-icon="mdi-arrow-right"
                outlined
                color="grey darken-3"
                full-width
                placeholder="And password too :)"
              ></v-text-field>
            </v-slide-y-transition>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-img eager src="@/assets/landingHeader.svg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      isAskEmail: true
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapActions(["attemptAuthentication"]),
    async authHandler() {
      const res = await this.attemptAuthentication({
        email: this.email,
        password: this.password
      });
      if (res) return;

      // If isAuthentication doesn't change that means login failed.
      // And the dialog system will show a message.
      this.isAskEmail = true;
      this.email = "";
      this.password = "";
    }
  }
};
</script>
