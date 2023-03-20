import { h, Component } from 'preact';

import { Router, route } from 'preact-router';

import HomeScreen from '../homescreen';
import Settings from '../settings';
import Crops from '../crops';
import Forecast from '../forecast';

const Main = () => {
	
}

export default class Mobile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<HomeScreen path="/"/>
				<Settings path="/settings"/>
				<Crops path="/crops"/>
				<Forecast path="/forecast"/>
			</Router>
		)
	}

}
