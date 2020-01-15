<template>
  <nav>
    <v-app-bar color="red" dark app>
      <v-app-bar-nav-icon @click.stop="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Dashboard Modern</span>
        <span>Project Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>
        <span>Exit</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app class="red darken-4">
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <v-img src="/avatar-1.png"></v-img>
                </v-avatar>
                <p class="white--text subheading mt-1 text-center">Username</p>
            </v-flex>
            <v-flex class="mt-4 mb-4">
                <Popup/>
            </v-flex>
        </v-layout>
        <v-list flat>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                <v-list-item-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "dashboard", text: "Dashboard", avatar: "/avatar-1.png", route: "/" },
      { icon: "folder", text: "Projects", avatar: "/avatar-2.pmg", route: "/projects" },
      { icon: "person", text: "Team", avatar: "/avatar-3.png", route: "/team" }
    ]
  }),
  components: {
      Popup
  }
};
</script>

<style lang="scss">
.border{ border-left: 4px solid #0ba518;}
</style>