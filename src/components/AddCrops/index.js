// import preact
import { h, Component } from 'preact';

import NavBar from '../navbar';

export default class AddCrops extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		cropName : "strawberries",
		harvest : 0
	}

	onChange = e =>{
		console.log(e.target.val)
		this.setState({[e.target.name] : e.target.value});
	}

	onSubmit = e =>{
		e.preventDefault()
		
		this.setState({cropName : "Strawberries", harvest : "0"})
		const crop = {cropName,harvest};
		console.log(crop)
	}
	

	render() {
		const{cropName,harvest} = this.state;


		return (
			<div className="app">
				<NavBar name='My Crops'/>
				<div className="container">
					
					<div className="addCrop">
						<h2>Add a New Crop: {cropName}</h2>
						<h2>Harvest time: {harvest}</h2>
						<form onSubmit={this.onSubmit}>
							<label>Crop Name:</label><br/>
							<div className="radio">
								<input
								type="radio"
								value="Strawberries"
								name="cropName"
								checked={cropName === "Strawberries"}
								onChange={this.onChange}
								/>
								Strawberries
							</div>
							
							<div className="radio">
								<input
								type="radio"
								value="Corn"
								name="cropName"
								checked={cropName === "Corn"}
								onChange={this.onChange}
								/>
								Corn
							</div>
							
							<div className="radio">
								<input
								type="radio"
								value="Carrots"
								name="cropName"
								checked={cropName === "Carrots"}
								onChange={this.onChange}
								/>
								Carrots
							</div>
							
							<div className="radio">
								<input
								type="radio"
								value="Peas"
								name="cropName"
								checked={cropName === "Peas"}
								onChange={this.onChange}
								/>
								Peas
							</div>

							<div className="radio">
								<input
								type="radio"
								value="Potatos"
								name="cropName"
								checked={cropName === "Potatos"}
								onChange={this.onChange}
								/>
								Potatos
							</div>

							<div>
								<label>Harvest time:</label><br/>
								<input 
									type="number" 
									value={harvest} 
									name="harvest" 
									onChange={this.onChange}
									min="1" 
									required
								/>
								<br/>
								<button type="submit" className="button">Add Crop</button>
								
							</div>
							
						</form>
					</div>
				</div>
				

				<a href='./crops' className="button">&#8592; Crops</a>

			</div>
		)
	}
}
