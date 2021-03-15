<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-navigation-drawer floating permanent>
          <v-list>
            <v-list-item
              v-for="item in items"
              :to="item.path"
              :key="item.title"
            >
              <v-list-item-content> {{ item.title }} </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Account Settings",
          path: "account-settings"
        },
        {
          title: "API Access",
          path: "api-access"
        },
        {
          title: "Billing & Credits",
          path: "billing"
        },
        {
          title: "Support",
          path: "support"
        }
      ]
    };
  }
};
</script>
