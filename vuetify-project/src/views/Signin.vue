<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert :value="error" type="warning">{{error}}</v-alert>
            <v-form v-model="valid">
              <v-text-field
                label="Email"
                name="login"
                prepend-icon="person"
                type="email"
                required
                v-model="email"
                :rules="emailRules"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                required
                v-model="password"
                :rules="passwordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click.prevent="signin" :disabled="processing || !valid">Sign In</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      valid: false,
      emailRules: [
          (v) => !!v || 'Email is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid' 
      ],
      passwordRules: [
        (v) => !!v || 'Password is required', 
        (v) => (v && v.length >= 6) || 'Password must have 6+ characters' 
      ]
    };
  },
  computed: {
      error(){
          return this.$store.getters.getError
      },
      processing() {
          return this.$store.getters.getProcessing
      },
      isUserAuthenticated() {
          return this.$store.getters.isUserAuthenticated
      }
  },
  watch: {
      isUserAuthenticated(val) {
          if(val === true) 
            this.$router.push("/")
      }
  },
  methods: {
    signin() {
      this.$store.dispatch("SIGNIN", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss">

</style>