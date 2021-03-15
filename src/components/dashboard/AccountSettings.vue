<template>
  <v-container>
    <v-container>
      <v-row>
        <v-subheader> Linked Accounts </v-subheader>
      </v-row>
      <v-row>
        <v-col cols="3" v-for="auth in auths" :key="auth.issuer">
          <v-card class="grey lighten-3">
            <v-card-title class="text-center"> {{ auth.issuer }} </v-card-title>
            <v-card-actions class="d-flex justify-center align-center">
              <v-btn class="overline font-weight-bold" text small>
                {{ auth.isConnected ? "disconnect" : "connect" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-subheader> Personal Details </v-subheader>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field placeholder="User Name" solo> </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field placeholder="User Email" solo> </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      auths: [
        {
          issuer: "Google",
          isConnected: false
        },
        {
          issuer: "Github",
          isConnected: false
        }
      ]
    };
  }
};
</script>
