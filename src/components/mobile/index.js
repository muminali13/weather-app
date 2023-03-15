// import preact
import { h, Component } from 'preact';

// import jquery for API calls
import $ from 'jquery';

import HomeScreen from './homescreen';



export default class Mobile extends Component {

	constructor(props) {
		super(props);

	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		// var url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5dd07d3033c59fcd9afe226989a8fdbc";
		// $.ajax({
		// 	url: url,
		// 	dataType: "jsonp",
		// 	success : this.parseResponse,
		// 	error : function(req, err){ console.log('API call failed ' + err); }
		// })
		// // once the data grabbed, hide the button
		// this.setState({ display: false });
	}

	render() {
		return (

			<div class="app">
				if (this.screen == 'home') {
					<HomeScreen/>
				}
			</div>

		)
	}

}
