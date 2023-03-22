// import preact
import { h, Component } from 'preact';

export default class NavBar extends Component {

	constructor(props) {
		super(props);
		this.name = props.name;
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
			<div class="header">
				<div className="nav-bar">
					<a href='../' class="button">&#8592;</a>
					<h1>{this.name}</h1>
				</div>
			</div>

		)
	}

}
