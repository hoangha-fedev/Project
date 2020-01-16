<template>
  <v-container>
    <h2 class="display-2 mb-4">Not products showing</h2>

    <v-layout row wrap>
      <template v-for="(product, index) in products">
        <v-flex xs2 pa-1 :key="index">
          <v-hover>
            <v-card
              slot-scope="{hover}"
              class="mx-auto"
              color="grey lighten-4"
              max-width="600"
              height="400"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" :aspact-ratio="16/9">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-dast-out orange darken-2 v-card--reveal display-3 black--text"
                    style="height:100%"
                  >${{product.price}}</div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-4" style="position:relative">
                <v-btn absolute fab medium right top color="orange" class="shite--text">
                  <v-icon>mdi-cart</v-icon>
                </v-btn>

                <div class="font-weight-light grey--text title mb-2">{{product.category}}</div>
                <h3 class="display-1 font-weight-light orange--text mb-2">{{product.title}}</h3>

                <div class="font-weight-light mb2">{{product.description}}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    products: [
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      },
      {
        price: 15,
        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        title: "Cooking",
        category: "For the perfect meal",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand"
      }
    ]
  })
};
</script>

<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.v-card {
  h3 {
    &.display-1 {
      font-size: 24px;
    }
  }
}
</style>
