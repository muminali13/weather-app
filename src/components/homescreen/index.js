// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $, { event } from 'jquery';

import { FaSearchLocation } from 'react-icons/fa'



export default class HomeScreen extends Component {

	constructor(props) {
		super(props);

		// const [data, setData] = useState({})
		// const [location, setLocation] = useState(``)

	}

	// a call to fetch weather data via wunderground
	fetchWeatherData() {
		if (e.keyCode == 13) {
			console.log(`Get data for: ${document.getElementById("search-textfield").innerText}`)

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
	}

	render() {

		function onSearch(e) {
			if (e.keyCode == 13) {
				console.log(`Get data for: ${document.getElementById("search-textfield").value}`)
			}
		}

		return (
			<div className="app">

				<div class="header">
					<div className="search">
						<FaSearchLocation class="search-icon" />
						<input type='text' id="search-textfield" onfocus={this.value = ''} placeholder="Search locations..." onKeyUp={onSearch} />
					</div>
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
						<h1>
							Today:
							<a href='./forecast' class="button" id="view-forecast-button">&#8594;</a>
						</h1>
						<div class="stats-container">
							<div className="stat-box feels">
								<h2>Feels Like</h2>
								<p>9°C</p>
							</div>
							<div className="stat-box humidity">
								<h2>Humidity</h2>
								<p>50%</p>
							</div>
							<div className="stat-box wind">
								<h2>Windspeed</h2>
								<p>12 MPH</p>
							</div>
						</div>
					</section>
					<section className="week-overview">
						<h1>
							This Week:
							<a href='./forecast' class="button" id="view-forecast-button">&#8594;</a>
						</h1>
						<div class="week-container">
							<div className="stat-box">
								<h2>Feels Like</h2>
								<p>9°C</p>
							</div>
							<div className="stat-box">
								<h2>Humidity</h2>
								<p>50%</p>
							</div>
							<div className="stat-box">
								<h2>Windspeed</h2>
								<p>12 MPH</p>
							</div>
						</div>
					</section>

					<section class="crops-overview">
						<h2>
							My Crops
							<a href='./crops' class="button" id="view-all-crops-button">&#8594;</a>
						</h2>
						<div class="crop-button">
							<img src='https://cdn-icons-png.flaticon.com/128/135/135695.png'></img>
						</div>
						<div class="crop-button">
							<img src='https://cdn-icons-png.flaticon.com/128/135/135695.png'></img>
						</div>
						<div class="crop-button">
							<img src='https://cdn-icons-png.flaticon.com/128/135/135695.png'></img>
						</div>
					</section>
				</div>
			</div>


		)
	}

}