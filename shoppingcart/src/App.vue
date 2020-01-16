<template>
  <v-app>
    <Navbar/>

    <SearchFront/>

    <v-content>
      <HelloWorld />
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import SearchFront from "./components/shared/search-front";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";

export default {
  name: "App",

  components: {
    HelloWorld,
    SearchFront,
    Footer,
    Navbar
  },

  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ],
    items: [
      {
        icon: "mdi-account",
        href: "#",
        title: "Account"
      }
    ],
    drawer: false
  })
};
</script>
