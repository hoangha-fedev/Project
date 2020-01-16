<template>
    <div>
        <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :href="item.href">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping Cart</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Products</v-btn>
        <v-btn text>
          <v-badge left color="green">
            <span slot="badge">5</span>
            <v-icon>mdi-cart</v-icon>
          </v-badge>Basket
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </div>
</template>

<script>
export default {
    data: () => ({
    items: [
      {
        icon: "mdi-account",
        href: "#",
        title: "Account"
      }
    ],
    drawer: false
  })
}
</script>