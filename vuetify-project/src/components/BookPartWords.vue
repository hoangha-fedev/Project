<template>
  <v-container fluid grid-list-lg>
      <span class="display-1">Vocabulary</span>
    <v-data-iterator :items="words" :items-per-page.sync="itemsPerPage" row wrap>
      <template slot="item" slot-scope="props">
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-card-title>
              <h4>{{props.item.origWord}}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{props.item.transWord}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      itemsPerPage: 4
    };
  }
};
</script>

<style lang="scss">
.v-data-iterator {
  display: flex;
  flex-wrap: wrap;
}
.v-data-footer {
  flex: 1;
  flex: 0 0 100%;
}
</style>