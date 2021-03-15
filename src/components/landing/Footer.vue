<template>
  <v-container class="px-12">
    <v-row class="mx-10">
      <v-col cols="4">
        <v-list class="black">
          <v-list-item v-for="item in zeroList" :key="item.title">
            <v-list-item-title class="overline">
              <a
                :href="item.path"
                class="white--text"
                target="_blank"
                style="text-decoration:none"
                >{{ item.title }}
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list class="black">
          <v-list-item v-for="item in firstList" :key="item.title">
            <v-list-item-title class="overline">
              <a
                :href="item.path"
                class="white--text"
                target="_blank"
                style="text-decoration:none"
                >{{ item.title }}
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list class="black">
          <v-list-item v-for="item in secondList" :key="item.title">
            <v-list-item-title class="overline">
              <a
                :href="item.path"
                class="white--text"
                target="_blank"
                style="text-decoration:none"
                >{{ item.title }}
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      zeroList: [
        {
          title: "Parasite UI",
          path: "https://parasite.todack.com"
        },
        {
          title: "MIT License",
          path: "https://github.com/todack/parasite-ui/blob/main/LICENSE"
        },
        {
          title: "Contact",
          path:
            "mailto:opensource@todack.com?subject=[Parasite] Add custom subject here."
        }
      ],
      firstList: [
        {
          title: "Parasite API GitHub",
          path: "https://github.com/todack/parasite"
        },
        {
          title: "Parasite UI GitHub",
          path: "https://github.com/todack/parasite-ui"
        },
        {
          title: "Issue Trackers",
          path: "https://github.com/todack/parasite/issues"
        },
        {
          title: "Discussions & Complaints",
          path: "https://github.com/todack/parasite/discussions"
        }
      ],
      secondList: [
        {
          title: "References",
          path: "https://google.com"
        },
        {
          title: "Authors",
          path: "https://google.com"
        }
      ]
    };
  }
};
</script>
