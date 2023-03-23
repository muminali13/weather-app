// import preact
import { h, Component } from 'preact';

import NavBar from '../mobile/navbar';

import data from '../../data/cropInfo.json';// assert { type: 'JSON' };


export default class Crops extends Component {

	constructor(props) {
		super(props);

		
		let table = data.crops
		console.log(table)

		this.setState({
			cropData: table
		})

		console.log(this.state.cropData.length)
	}

	render() {
		return (
			
			<div className="app">
				<NavBar name='My Crops'/>
				<div class="container">
						
					<table className="crop-table">
						<tr>
							<th></th>
							<th><h1>Crop</h1></th>
							<th><h1>Days till Harvest</h1></th>
						</tr>
						{this.state.cropData.map(row => 
							<tr>
								<td><img src={`../../assets/crop-icons/${row.cropName}.png`}/></td>
								<td><h1>{row.cropName}</h1></td>
								<td><h1>{row.harvest}</h1></td>
							</tr>
						)}
						
					</table>

					<a href='/AddCrops' class="button">Add Crops</a>
				</div>
				
			</div>
		)
	}
}
