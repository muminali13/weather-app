// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $, { event } from 'jquery';

import { FaSearchLocation } from 'react-icons/fa'



export default class HomeScreen extends Component {

	constructor(props) {
		super(props);

		this.onSearch = this.onSearch.bind(this);

		this.state.location = "London"
		// const [data, setData] = useState({})
		// const [location, setLocation] = useState(``)

		this.fetchWeatherData()
		this.fetchForecastData()
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.location},uk&units=metric&APPID=5dd07d3033c59fcd9afe226989a8fdbc`;
		$.ajax({
			url: url,
			dataType: "json",
			success: (parsed_json) => {
				this.setState({
					location: parsed_json.name,
					temperature: parsed_json.main.temp,
					conditions: parsed_json.weather[0].description,
					feelsLike: parsed_json.main.feels_like,
					humidiy: parsed_json.main.humidity,
					windspeed: parsed_json.wind.speed
				})},
			error: function(req, err) { 
				console.log('API call failed ' + err);
				window.alert("Couldn't get data for city: " + this.state.location)
			}
		})
	}

	fetchForecastData = () => {
		var url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location},uk&cnt=5&APPID=5dd07d3033c59fcd9afe226989a8fdbc`;
		$.ajax({
			url: url,
			dataType: "json",
			success: (parsed_json) => {
				this.setState({
					forecast: parsed_json.list
				})},
			error: function(req, err) { 
				console.log('API call failed ' + err);
				window.alert("Couldn't get data for city: " + this.state.location)
			}
		})
	}

	onSearch(e) {
		if (e.keyCode == 13) {
			let l = document.getElementById("search-textfield").value
			console.log(`Get data for: ${l}`)
			this.state.location = l;
			this.fetchWeatherData()
		}
	}

	render() {

		return (
			<div className="app">

				<div class="header">
					<div className="search">
						<FaSearchLocation class="search-icon" />
						<input type='text' id="search-textfield" onfocus={this.value = ''} placeholder="Search locations..." onKeyUp={this.onSearch} />
					</div>
				</div>

				<div className="container">

					<section className="top">
						<div className="left">
							<div className="location">
								<h2>{this.state.location}</h2>
							</div>

							<div className="description">
								<h2>{this.state.conditions}</h2>
							</div>
						</div>
						<div className="temp">
							<h1>{this.state.temperature}°C</h1>
						</div>
					</section>
					<section className="stats-overview">
						<h1>Today</h1>
						<div class="stats-container">
							<div className="stat-box feels">
								<h2>Feels Like</h2>
								<p>{this.state.feelsLike}°C</p>
							</div>
							<div className="stat-box humidity">
								<h2>Humidity</h2>
								<p>{this.state.humidiy}%</p>
							</div>
							<div className="stat-box wind">
								<h2>Windspeed</h2>
								<p>{this.state.windspeed} MPH</p>
							</div>
						</div>
					</section>
					<section className="week-overview">
						<h1>
							This Week:
							<a href='./forecast' class="button" id="view-forecast-button">&#8594;</a>
						</h1>
						<div class="week-container">
							<div className="weekday-summary-box">
								<p>FRI</p>
								<img src="../../../assets/weather-icons/very-cold.png"></img>
							</div>
							<div className="weekday-summary-box">
								<p>SAT</p>
								<img src="../../../assets/weather-icons/icy.png"></img>
							</div>
							<div className="weekday-summary-box">
								<p>SUN</p>
								<img src="../../../assets/weather-icons/raindrops.png"></img>
							</div>
							<div className="weekday-summary-box">
								<p>MON</p>
								<img src="../../../assets/weather-icons/wind.png"></img>
							</div>
							<div className="weekday-summary-box">
								<p>TUE</p>
								<img src="../../../assets/weather-icons/cloudy-sunny.png"></img>
							</div>
							<div className="weekday-summary-box">
								<p>WED</p>
								<img src="../../../assets/weather-icons/sunny.png"></img>
							</div>
						</div>
					</section>

					<section class="crops-overview">
						<h2>
							My Crops
							<a href='./crops' class="button" id="view-all-crops-button">&#8594;</a>
						</h2>
						<div className="crops-container">
							<div class="crop-icon">
								<img src='../../../assets/crop-icons/corn.png'></img>
							</div>
							<div class="crop-icon">
								<img src='../../../assets/crop-icons/wheat.png'></img>
							</div>
							<div class="crop-icon">
								<img src='../../../assets/crop-icons/apple.png'></img>
							</div>
							<div class="crop-icon">
								<img src='../../../assets/crop-icons/cabbage.png'></img>
							</div>
						</div>
						
					</section>
				</div>
			</div>


		)
	}

}