<template>
    <v-footer dark height="auto" class="pa-0">
      <v-card flat tile class="indigo lighten-1 white--text text-center flex">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{icon}}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text>Shopping card footer text here</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text text-center">
          &copy;2019 -
          <strong>Shoping Card</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ]
  })
}
</script>