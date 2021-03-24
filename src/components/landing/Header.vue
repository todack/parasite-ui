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
                <span class="font-weight-bold headline">{{ email }}</span
                >.
              </p>
              <v-text-field
                v-else
                class="title"
                @keydown.enter="changeInput"
                v-model="input"
                append-icon="mdi-arrow-right"
                outlined
                color="grey darken-3"
                full-width
                :placeholder="inputPH"
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
export default {
  data() {
    return {
      input: "",
      inputPH: "Email Please!",
      isAuthenticated: false,
      email: ""
    };
  },
  methods: {
    changeInput(data) {
      console.log(data);
      if (this.inputPH === "Email Please!") {
        this.email = this.input;
        this.input = "";
        this.inputPH = "And password too :)";
      } else {
        this.attemptAuthentication({ email: this.email, password: this.input });
        this.input = "";
        this.inputPH = "We sent a secret code :D";
      }
    },
    attemptAuthentication(userData) {
      console.log(userData);
      this.isAuthenticated = true;
    }
  }
};
</script>
