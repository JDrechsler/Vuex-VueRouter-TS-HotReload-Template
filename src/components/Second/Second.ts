import Vue from 'vue'
import Component from 'vue-class-component'
import { store } from '../../store'

@Component({
	template: `<section>
		<h2>Second! {{msg}}</h2>
		<h4>{{state.count}}</h4>
		<p>sName NEU: {{state.sName}}</p>
		<h4> Inline editing made possible with Template Literal Editor!</h4>
	</section>`
})
export default class Second extends Vue {

	get state() {
		return store.state
	}

	msg: string = 'Hey, Second!'
}