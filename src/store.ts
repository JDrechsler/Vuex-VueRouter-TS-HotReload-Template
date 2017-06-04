import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		count: 0,
		sName: "Hans"
	},
	mutations: {
		incrementCount(state, value: number) {
			state.count = value;
		},
		changeSName(state, value: string) {
			state.sName = value
		}
	}
});
