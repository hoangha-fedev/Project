<template>
  <v-app>
  <v-app-bar app class="primary" dark>
    <v-toolbar-title>
      <v-btn v-for="(link,i) in links" :key="`links${i}`" :to="link.route">
        <span>{{link.home}}</span>
      </v-btn>
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="(item, i) in menuItems" :key="`menuItems${i}`" :to="item.route" class="ml-5">
      <v-icon left>{{item.icon}}</v-icon>
      <span>{{item.title}}</span>
    </v-btn>
  </v-app-bar>

  <v-content class="pa-0">
    <v-container fluid class="pa-0">

      <router-view></router-view>
    </v-container>
  </v-content>

  <v-footer color="primary lighten-1" padless class="pa-0">
    <v-row justify="center" no-gutters>
      <v-btn v-for="(item,i) in menuFooter" :key="`menuFooter${i}`" color="white" text rounded class="my-2" :to="item.route">{{ item.title }}</v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: "AppHeader",

  data: () => ({
    links: [
      {home: "Hoang Ha", route:"/"},
    ],
    menuFooter:[
      {title: "Home",route:"/"},
      {title: "Features", route:"/features"},
      {title: "Pricing", route:"/pricing"},
      {title: "FAQ", route:"/faq"},
      {title: "Blog", route:"/blog"},
      {title: "Hotels", route:"/hotels"},
      {title: "Contact Us", route:"/contact-us"},
    ],
    menuItems: [
      {title: "Features", icon:"mdi-home", route:"/features"},
      {title: "Pricing", icon:"mdi-account", route:"/pricing"},
      {title: "FAQ", icon:"mdi-account", route:"/faq"},
      {title: "Blog", icon:"mdi-account", route:"/blog"},
      {title: "Hotels", icon:"mdi-account", route:"/hotels"},
      {title: "Login", icon:"mdi-lock", route:"/login"},
      {title: "Sign Up", icon:"mdi-account-plus", route:"/signup"},
    ]
  })
};
</script>
