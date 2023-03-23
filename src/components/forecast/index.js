// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';

import NavBar from '../mobile/navbar';

export default class Forecast extends Component {

	constructor(props) {
		super(props);

		this.state.location = "London,UK"

		this.fetchWeatherData()
	}

	fetchWeatherData = () => {

		let weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

		function findMin(A, start, end) {
			let min = 100;
			for (let index = start; index <= end; index++) {
				if (A[index].main.temp_min < min) {
					min = A[index].main.temp_min
				}
			}
			return Math.round(min);
		}

		function findMax(A, start, end) {
			let max = 0;
			for (let index = start; index <= end; index++) {
				if (A[index].main.temp_max > max) {
					max = A[index].main.temp_max
				}
			}
			return Math.round(max);
		}

		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location},uk&units=metric&APPID=5dd07d3033c59fcd9afe226989a8fdbc`,
			dataType: "json",
			success: (parsed_json) => {
				this.setState({

					forecastDay1_day: weekdays[new Date(parsed_json.list[0].dt_txt).getDay()],
					forecastDay1_icon: parsed_json.list[0].weather[0].icon,
					forecastDay1_low: findMin(parsed_json.list, 0, 7),
					forecastDay1_high: findMax(parsed_json.list, 0, 7),

					forecastDay2_day: weekdays[new Date(parsed_json.list[8].dt_txt).getDay()],
					forecastDay2_icon: parsed_json.list[8].weather[0].icon,
					forecastDay2_low: findMin(parsed_json.list, 8, 15),
					forecastDay2_high: findMax(parsed_json.list, 8, 15),

					forecastDay3_day: weekdays[new Date(parsed_json.list[16].dt_txt).getDay()],
					forecastDay3_icon: parsed_json.list[16].weather[0].icon,
					forecastDay3_low: findMin(parsed_json.list, 16, 23),
					forecastDay3_high: findMax(parsed_json.list, 16, 23),

					forecastDay4_day: weekdays[new Date(parsed_json.list[24].dt_txt).getDay()],
					forecastDay4_icon: parsed_json.list[24].weather[0].icon,
					forecastDay4_low: findMin(parsed_json.list, 24, 31),
					forecastDay4_high: findMax(parsed_json.list, 24, 31),

					forecastDay5_day: weekdays[new Date(parsed_json.list[32].dt_txt).getDay()],
					forecastDay5_icon: parsed_json.list[32].weather[0].icon,
					forecastDay5_low: findMin(parsed_json.list, 32, 39),
					forecastDay5_high: findMax(parsed_json.list, 32, 39),

					temperature: parsed_json.list[0].main.temp,
					conditions: parsed_json.list[0].weather[0].description,
					feelsLike: parsed_json.list[0].main.feels_like,
					humidiy: parsed_json.list[0].main.humidity,
					windspeed: parsed_json.list[0].wind.speed
				})
			},

			error: function (req, err) {
				console.log('API call failed ' + err);
				window.alert("Couldn't get data for city: " + this.state.location)
			}
		})
	}

	render() {
		return (
			<div className="app">
				<NavBar name='Forecast' />

				<div className="container">

					<h1>The Next Week:</h1>

					<table class="forecast-table">
						<tr>
							<td><h1>{this.state.forecastDay1_day}</h1></td>
							<td>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay1_icon}.png`}></img>
							</td>
							<td>
								<p>LOW&nbsp;&nbsp;{this.state.forecastDay1_low}</p>
								<p>HIGH&nbsp;{this.state.forecastDay1_high}</p>
							</td>
						</tr>

						<tr>
							<td><h1>{this.state.forecastDay2_day}</h1></td>
							<td>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay2_icon}.png`}></img>
							</td>
							<td>
								<p>LOW&nbsp;&nbsp;{this.state.forecastDay2_low}</p>
								<p>HIGH&nbsp;{this.state.forecastDay2_high}</p>
							</td>
						</tr>

						<tr>
							<td><h1>{this.state.forecastDay3_day}</h1></td>
							<td>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay3_icon}.png`}></img>
							</td>
							<td>
								<p>LOW&nbsp;&nbsp;{this.state.forecastDay3_low}</p>
								<p>HIGH&nbsp;{this.state.forecastDay3_high}</p>
							</td>
						</tr>

						<tr>
							<td><h1>{this.state.forecastDay4_day}</h1></td>
							<td>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay4_icon}.png`}></img>
							</td>
							<td>
								<p>LOW&nbsp;&nbsp;{this.state.forecastDay4_low}</p>
								<p>HIGH&nbsp;{this.state.forecastDay4_high}</p>
							</td>
						</tr>

						<tr>
							<td><h1>{this.state.forecastDay5_day}</h1></td>
							<td>
								<img src={`../../../assets/weather-icons/${this.state.forecastDay5_icon}.png`}></img>
							</td>
							<td>
								<p>LOW&nbsp;&nbsp;{this.state.forecastDay5_low}</p>
								<p>HIGH&nbsp;{this.state.forecastDay5_high}</p>
							</td>
						</tr>

					</table>

				</div>

			</div>
		)
	}

}
