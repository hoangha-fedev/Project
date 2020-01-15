import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebaseConfig from './config/firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    firebase.auth().onAuthStateChanged(function(user) {
      this.$store.dispatch('STATE_CHANGED', user)
    })
  }
}).$mount('#app');
