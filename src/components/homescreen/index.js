// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';


export default class HomeScreen extends Component {

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
		// once the data grabbed, hide the button
		// this.setState({ display: false });
	}

	render() {
		return (
			<div className="app">
				<div className="search">

				</div>
				<div className="container">
					<section className="top">
						<div className="left">
							<div className="location">
								<h2>London</h2>
							</div>

							<div className="description">
								<h2>Cloudy</h2>
							</div>
						</div>
						<div className="temp">
							<h1>12°C</h1>
						</div>
					</section>
					<section className="stats-overview">
						<div className="feels">
							<p>9°C</p>
						</div>
						<div className="humidity">
							<p>50%</p>
						</div>
						<div className="wind">
							<p>12 MPH</p>
						</div>
					</section>
					<section class="crops-overview">
						<p>My Crops</p>
					</section>
				</div>
			</div>


		)
	}

}
