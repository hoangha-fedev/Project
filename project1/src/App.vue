<template>
  <v-app>
    <v-content>
      <AppHeader/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",

  components: {
    AppHeader,
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
body{ font-family: $body-font-family;}
</style>