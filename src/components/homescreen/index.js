// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $, { event } from 'jquery';

import { FaSearchLocation } from 'react-icons/fa'



export default class HomeScreen extends Component {

	constructor(props) {
		super(props);

		this.state.location = "London"

		this.fetchWeatherData()

		this.onSearch = this.onSearch.bind(this);
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		var weekdays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

		var url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location},uk&units=metric&APPID=5dd07d3033c59fcd9afe226989a8fdbc`;
		$.ajax({
			url: url,
			dataType: "json",
			success: (parsed_json) => {
				this.setState({

					forecastDay1_day: weekdays[new Date(parsed_json.list[0].dt_txt).getDay()],
					forecastDay1_icon: parsed_json.list[0].weather[0].icon,
					
					forecastDay2_day: weekdays[new Date(parsed_json.list[8].dt_txt).getDay()],
					forecastDay2_icon: parsed_json.list[8].weather[0].icon,
					
					forecastDay3_day: weekdays[new Date(parsed_json.list[16].dt_txt).getDay()],
					forecastDay3_icon: parsed_json.list[16].weather[0].icon,
					
					forecastDay4_day: weekdays[new Date(parsed_json.list[24].dt_txt).getDay()],
					forecastDay4_icon: parsed_json.list[24].weather[0].icon,
					
					forecastDay5_day: weekdays[new Date(parsed_json.list[32].dt_txt).getDay()],
					forecastDay5_icon: parsed_json.list[32].weather[0].icon,
					
					temperature: parsed_json.list[0].main.temp,
					conditions: parsed_json.list[0].weather[0].description,
					feelsLike: parsed_json.list[0].main.feels_like,
					humidiy: parsed_json.list[0].main.humidity,
					windspeed: parsed_json.list[0].wind.speed
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
								<p>{this.state.forecastDay1_day}</p>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay1_icon}.png`}></img>
							</div>
							<div className="weekday-summary-box">
								<p>{this.state.forecastDay2_day}</p>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay2_icon}.png`}></img>
							</div>
							<div className="weekday-summary-box">
								<p>{this.state.forecastDay3_day}</p>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay3_icon}.png`}></img>
							</div>
							<div className="weekday-summary-box">
								<p>{this.state.forecastDay4_day}</p>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay4_icon}.png`}></img>
							</div>
							<div className="weekday-summary-box">
								<p>{this.state.forecastDay5_day}</p>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay5_icon}.png`}></img>
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