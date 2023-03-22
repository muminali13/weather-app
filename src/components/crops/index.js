// import preact
import { h, Component } from 'preact';

import NavBar from '../mobile/navbar';

export default class Crops extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<NavBar name='My Crops'/>
				<h1>Crops</h1>

			</div>
		)
	}
}
