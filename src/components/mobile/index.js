import { h, Component } from 'preact';

import { Router, route } from 'preact-router';

import HomeScreen from '../homescreen';
import Crops from '../crops';
import Forecast from '../forecast';
import AddCrops from '../AddCrops';

function DefaultScreen() {
	var currentDate = new Date()
	var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	return (
		<div className="app">
			<div className="container">

				<div style={
					{
						"background-color":"rgba(0, 0, 0, 0.4)",
						"text-align":"center",
						"border-radius":"10px",
						"padding-bottom":"1rem"
					}
				}>
					<h1 style={{"font-size":"10rem"}}>{`${currentDate.getHours()}:${currentDate.getMinutes()}`}</h1>
					<h2 style={{"font-size":"2rem"}}>{`${weekdays[currentDate.getDay()]} ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}</h2>

				</div>
				
				<a href="./home" class="button" style={{
					"width":"100%",
					"height": "100%",
					"padding": "1rem",
					"text-align": "center",
					"margin": "auto auto"
				}}>Click to start!</a>
			</div>
		</div>
		
	)
}

export default class Mobile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Crops path="/crops"/>
				<Forecast path="/forecast"/>
				<AddCrops path="/AddCrops"/>
				<HomeScreen path="/home"/>
				<DefaultScreen default/>
			</Router>
		)
	}

}
