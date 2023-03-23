import { h, Component } from 'preact';

import { Router, route } from 'preact-router';

import HomeScreen from '../homescreen';
import Settings from '../settings';
import Crops from '../crops';
import Forecast from '../forecast';
import AddCrops from '../AddCrops';

function DefaultScreen() {

	return (
		<div className="app">
			<div className="container">
				<a href="./home" class="button" style={{
					"width":"100%",
					"height": "100%",
					"padding": "1rem",
					"text-align": "center",
					"margin": "auto auto"
				}}>Click to start!</a>
			</div>
		</div>
		
	)
}

export default class Mobile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Settings path="/settings"/>
				<Crops path="/crops"/>
				<Forecast path="/forecast"/>
				<AddCrops path="/AddCrops"/>
				<HomeScreen path="/home"/>
				<DefaultScreen default/>
			</Router>
		)
	}

}
