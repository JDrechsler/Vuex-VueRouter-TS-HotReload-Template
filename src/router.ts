import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home/Home.vue";
import Second from "./components/Second/Second.vue";
import TestClassSplit from "./components/TestClassSplit/TestClassSplit.vue";

Vue.use(VueRouter)

const routes = [
	{ path: '/Second', component: Second },
	{ path: '/TestClassSplit', component: TestClassSplit },
	{ path: '/', component: Home }
]

export const router = new VueRouter({
	routes,
	mode: 'history'
})