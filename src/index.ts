//Changes in here can not be hot reloaded

import Vue from "vue";
import index from "./index.vue"
import App from './App.vue'
import { store } from './store'
import { router } from './router'

Vue.config.productionTip = false

new Vue({
	el: "#app",
	store,
	router,
	render: h => h(App)
});