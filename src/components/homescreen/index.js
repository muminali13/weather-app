// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';


export default class HomeScreen extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (


			<div className="container">
				<div className="top">
					<div className="location">
						<h1>London</h1>
					</div>
					<div className="temp">
						<h2>12°C</h2>
					</div>
					<div className="description">
						<p>Cloudy</p>
					</div>
				</div>
				<div className="bottom">
					<div className="feels">
						<p>9°C</p>
					</div>
					<div className="humidity">
						<p>50%</p>
					</div>
					<div className="wind">
						<p>12 MPH</p>
					</div>
				</div>
			</div>

		)
	}

}
