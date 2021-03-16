<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-navigation-drawer floating permanent>
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.path"
            >
              <v-list-item-content class="font-weight-bold">
                {{ item.title }}
              </v-list-item-content>
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
          title: "Introduction",
          path: "introduction"
        },
        {
          title: "Programmatic Access",
          path: "programmatic-access"
        },
        {
          title: "Web Interface",
          path: "web-interface"
        }
      ]
    };
  }
};
</script>
