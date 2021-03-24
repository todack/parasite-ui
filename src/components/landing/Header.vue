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
                v-else-if="inputNum === 0"
                class="title"
                @keydown.enter="changeInput"
                v-model="email"
                append-icon="mdi-arrow-right"
                outlined
                color="grey darken-3"
                full-width
                placeholder="Email Please!"
              ></v-text-field>
              <v-text-field
                v-else-if="inputNum === 1"
                class="title"
                @keydown.enter="changeInput"
                v-model="password"
                append-icon="mdi-arrow-right"
                outlined
                color="grey darken-3"
                full-width
                placeholder="And password too :)"
              ></v-text-field>
              <v-text-field
                v-else
                class="title"
                @keydown.enter="changeInput"
                v-model="secretCode"
                append-icon="mdi-arrow-right"
                outlined
                color="grey darken-3"
                full-width
                placeholder="We sent a secret code :D"
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
      inputNum: 0,
      email: "",
      password: "",
      secretCode: "",
      isAuthenticated: false
    };
  },
  methods: {
    changeInput() {
      this.inputNum++;

      if (this.inputNum === 2)
        this.attemptAuthentication({
          email: this.email,
          password: this.password
        });
    },
    attemptAuthentication(userData) {
      console.log(userData);
      this.isAuthenticated = true;
    }
  }
};
</script>
