// import preact
import { h, Component } from 'preact';

import NavBar from '../mobile/navbar';


export default class AddCrops extends Component {

	constructor(props) {
		super(props);
	}

	onSelectionChange = e => {
		console.log(e)
		this.setState({ 
			cropName: e.target.value,
		});
	}

	onTimeChange = e => {
		console.log(e)
		this.setState({ 
			harvest: e.target.value,
		});
	}

	onSubmit = e => {
		e.preventDefault()
		console.log(this.state)

		// let res = http.put('../../data/cropInfo.json', this.state)

		this.setState({ cropName: "Strawberries", harvest: "0" })
	}


	render() {
		return (
			<div className="app">
				<NavBar name='My Crops' />
				<div className="container">

					<div className="addCrop">
						<h2>Adding Crop: {this.state.cropName}</h2>
						<h2>Harvest in: {this.state.harvest} days</h2>
						<form onSubmit={this.onSubmit}>
							<label>Crop Name:</label><br />
							<div className="radio">
								<input
									type="radio"
									value="Strawberries"
									name="cropName"
									checked={this.state.cropName === "Strawberries"}
									onChange={this.onSelectionChange}
								/>
								Strawberries
							</div>

							<div className="radio">
								<input
									type="radio"
									value="Corn"
									name="cropName"
									checked={this.state.cropName === "Corn"}
									onChange={this.onSelectionChange}
								/>
								Corn
							</div>

							<div className="radio">
								<input
									type="radio"
									value="Carrots"
									name="cropName"
									checked={this.state.cropName === "Carrots"}
									onChange={this.onSelectionChange}
								/>
								Carrots
							</div>

							<div className="radio">
								<input
									type="radio"
									value="Peas"
									name="cropName"
									checked={this.state.cropName === "Peas"}
									onChange={this.onSelectionChange}
								/>
								Peas
							</div>

							<div className="radio">
								<input
									type="radio"
									value="Potatos"
									name="cropName"
									checked={this.state.cropName === "Potatos"}
									onChange={this.onSelectionChange}
								/>
								Potatos
							</div>

							<div>
								<label>Harvest time:</label><br />
								<input
									type="number"
									value={this.state.harvest}
									name="harvest"
									onChange={this.onTimeChange}
									min="1"
									required
								/>
								<br />
								<button type="submit" className="button">Add Crop</button>

							</div>

						</form>
					</div>
				</div>

			</div>
		)
	}
}
