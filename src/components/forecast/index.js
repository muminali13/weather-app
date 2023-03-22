// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';

import NavBar from '../mobile/navbar';

export default class Forecast extends Component {

	constructor(props) {
		super(props);

		// const [data, setData] = useState({})
		// const [location, setLocation] = useState(``)

	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// var url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location},uk&APPID=5dd07d3033c59fcd9afe226989a8fdbc`;
		// $.ajax({
		// 	url: url,
		// 	dataType: "jsonp",
		// 	success: this.parseResponse,
		// 	error: function (req, err) { console.log('API call failed ' + err); }
		// })
		// // once the data grabbed, hide the button
		// this.setState({ display: false });
	}

	render() {
		return (
			<div className="app">
				<NavBar name='Forecast'/>

				<div className="container">

					<h1>The Next Week:</h1>
				
					<table>
						<tr>
							<td>MON</td>
							<td><img /></td>
							<td>
								<p>LOW 4</p>
								<p>HIGH 4</p>
							</td>
						</tr>

						<tr>
							<td>TUE</td>
							<td><img /></td>
							<td>
								<p>LOW 4</p>
								<p>HIGH 4</p>
							</td>
						</tr>

						<tr>
							<td>WED</td>
							<td><img /></td>
							<td>
								<p>LOW 4</p>
								<p>HIGH 4</p>
							</td>
						</tr>

						<tr>
							<td>THU</td>
							<td><img /></td>
							<td>
								<p>LOW 4</p>
								<p>HIGH 4</p>
							</td>
						</tr>

						<tr>
							<td>FRI</td>
							<td><img /></td>
							<td>
								<p>LOW 4</p>
								<p>HIGH 4</p>
							</td>
						</tr>

					</table>

				</div>

			</div>
		)
	}

}
