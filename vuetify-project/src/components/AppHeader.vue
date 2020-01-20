<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary class="hidden-md-and-up">
      <v-list dense>
        <v-list-item v-for="(item,i) in menuItems" :key="`navdrawer${i}`" router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="`Hoang Ha`"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(item, i) in menuItems"
          :key="`menuItems${i}`"
          :to="item.route"
          class="ml-5"
        >
          <v-icon left>{{item.icon}}</v-icon>
          <span>{{item.title}}</span>
        </v-btn>
        <v-btn
          text
          class="ml-5"
          @click.prevent="logout"
          v-if="isUserAuthenticated"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          <span>Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",

  data() {
    return {
      drawer: false
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            { title: "home", icon: "mdi-home", route: "/" },
            { title: "books", icon: "mdi-eye", route: "/books" },
            { title: "profile", icon: "mdi-account-circle", route: "/profile" }
          ]
        : [
            { title: "books", icon: "mdi-eye", route: "/books" },
            { title: "signin", icon: "mdi-login", route: "/signin" },
            { title: "signup", icon: "mdi-lock-open", route: "/signup" }
          ];
    }
  },
  methods: {
    logout() {
      this.$confirm("Do you really want to exit?").then(res => {
        if(res) 
          this.$store.dispatch('LOGOUT')
      });
    }
  }
};
</script>
