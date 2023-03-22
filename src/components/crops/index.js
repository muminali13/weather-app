// import preact
import { h, Component } from 'preact';

import NavBar from '../mobile/navbar';

export default class Crops extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			
			<div className="app">
				<NavBar name='My Crops'/>
				<div class="container">
					<div class="myCrops">
						<a href='/AddCrops' class="button">Add Crops</a>
						
						<table id="crops">
							<tr>
								<th>Crop</th>
								<th>Harvest Time</th>
							</tr>
							<tr>
								<td>Strawberries</td>
								<td>100 days</td>
							</tr>
							<tr>
								<td>Corn</td>
								<td>20 days</td>
							</tr>
						</table>
					</div>
				</div>
				
				

				<a href='../' class="button">&#8592; Home</a>

			</div>
		)
	}
}
