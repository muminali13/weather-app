// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';

import HomeScreen from '../homescreen';



export default class Mobile extends Component {

	constructor(props) {
		super(props);

		this.screen = "home"
	}

	render() {
		if (this.screen == 'home') {
			return (

				<div class="app">
						<HomeScreen/>
				</div>
	
			)
		} else if (this.screen == "settings"){
			return (

				<div class="app">
						<HomeScreen/>
				</div>
	
			)
		} else if (this.screen == "crops"){
			return (

				<div class="app">
						<HomeScreen/>
				</div>
	
			)
		} else if (this.screen == "forecast"){
			return (

				<div class="app">
						<HomeScreen/>
				</div>
	
			)
		}
		
	}

}
