import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
	apiKey: 'AIzaSyAIZ3mgddWaj_0E1H-5UVkLpzuRsQdYA_U',
	authDomain: 'vue-calendar-37518.firebaseapp.com',
	databaseURL: 'https://vue-calendar-37518.firebaseio.com',
	projectId: 'vue-calendar-37518',
	storageBucket: 'vue-calendar-37518.appspot.com',
	messagingSenderId: '959464331551',
	appId: '1:959464331551:web:25973b3b594fb8803e782a'
});

export const db = firebase.firestore();

new Vue({
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
