<template>
  <v-container class="mt-10">
    <div v-for="(groupList, groupName) in groupedDomainsList" :key="groupName">
      <v-row>
        <v-subheader class="headline"> {{ groupName }} </v-subheader>
      </v-row>
      <v-row class="mb-5"><v-divider></v-divider></v-row>
      <v-row justify="start" align="center" class="mb-10">
        <v-col cols="3" v-for="domain in groupList" :key="domain.name">
          <v-card dark :to="'/request/' + domain._id">
            <v-card-title class="overline"> {{ domain.name }} </v-card-title>
            <v-card-text style="overflow-y:hidden; height: 10vh">
              {{ domain.shortDesc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["domainsList", "searchText"]),
    groupedDomainsList() {
      const pat = this.searchText.toLowerCase();
      return this.domainsList
        .filter(
          val =>
            val.name.toLowerCase().includes(pat) ||
            val.className.includes(pat) ||
            val.shortDesc.toLowerCase().includes(pat)
        )
        .reduce((ret, cur) => {
          ret[cur.className] = ret[cur.className] || [];
          ret[cur.className].push(cur);
          return ret;
        }, Object.create(null));
    }
  }
};
</script>
