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
                <span class="font-weight-bold headline">{{
                  userData.email
                }}</span>
              </p>
              <div v-else>
                <v-text-field
                  v-if="isAskEmail"
                  class="title"
                  @keydown.enter="isAskEmail = !isAskEmail"
                  v-model="email"
                  hide-details
                  append-icon="mdi-arrow-right"
                  outlined
                  color="grey darken-3"
                  full-width
                  placeholder="Email Please!"
                ></v-text-field>
                <v-text-field
                  v-else
                  class="title"
                  @keydown.enter="authHandler"
                  v-model="password"
                  hide-details
                  append-icon="mdi-arrow-right"
                  outlined
                  color="grey darken-3"
                  full-width
                  placeholder="And password too :)"
                ></v-text-field>
                <v-chip-group class="mt-3" v-model="mode" mandatory>
                  <v-chip filter value="login" class="overline" dark>
                    Login
                  </v-chip>
                  <v-chip filter value="signup" class="overline" dark>
                    Signup
                  </v-chip>
                </v-chip-group>
              </div>
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
      isAskEmail: true,
      mode: "login"
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "userData"])
  },
  methods: {
    ...mapActions(["attemptLogin", "attemptSignup"]),
    async authHandler() {
      let res;

      if (this.mode === "login") {
        res = await this.attemptLogin({
          email: this.email,
          password: this.password
        });
      } else {
        res = await this.attemptSignup({
          email: this.email,
          password: this.password
        });
      }

      if (res) return;

      // If isAuthentication doesn't change that means login/signup failed.
      // And the dialog system will show a message.
      this.isAskEmail = true;
      this.email = "";
      this.password = "";
    }
  }
};
</script>
