import Vue from 'vue'
import Component from 'vue-class-component'
import { store } from '../../store'

@Component({
	template: `<section>
	<h2>Home-Component</h2>
	<h3>Welcome on my page :)</h3>
</section>`
})
export default class Home extends Vue {

	get state() {
		return store.state
	}
}