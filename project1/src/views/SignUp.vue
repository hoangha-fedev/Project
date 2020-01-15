<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sign Up</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-alert :value="error" type="warning">{{error}}</v-alert>
            <v-form>
              <v-text-field label="Email" name="login" type="email" required v-model="email" />
              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                required
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click.prevent="signup" :disabled="processing">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import firebase from 'firebase';

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed:{
    error() {
      return this.$store.getters.getError
    },
    processing() {
      return this.$store.getters.getProcessing
    },
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch:{
    isUserAuthenticated(val) {
      if(val === true) {
        this.$router.push("/")
      }
    }
  },
  methods: {
    signup() {
      this.$store.dispatch("SIGNUP", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>