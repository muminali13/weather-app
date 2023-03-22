// import preact
import { h, Component } from 'preact';
import { useState } from 'react';

import NavBar from '../navbar';

export default class AddCrops extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		cropName : "strawberries",
		harvest : 100
	}

	onChange = e =>{
		console.log(e.target.val)
		this.setState({[e.target.name] : e.target.value});
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
						<form>
							<label>Crop Name:</label><br/>
							<div className="radio">
								<input
								type="radio"
								value="strawberries"
								name="cropName"
								checked={cropName === "strawberries"}
								onChange={this.onChange}
								/>
								Strawberries
							</div>
							
							<div className="radio">
								<input
								type="radio"
								value="corn"
								name="cropName"
								checked={cropName === "corn"}
								onChange={this.onChange}
								/>
								Corn
							</div>
							
							<div className="radio">
								<input
								type="radio"
								value="carrots"
								name="cropName"
								checked={cropName === "carrots"}
								onChange={this.onChange}
								/>
								Carrots
							</div>
							
							<div className="radio">
								<input
								type="radio"
								value="peas"
								name="cropName"
								checked={cropName === "peas"}
								onChange={this.onChange}
								/>
								Peas
							</div>

							<div className="radio">
								<input
								type="radio"
								value="potatos"
								name="cropName"
								checked={cropName === "potatos"}
								onChange={this.onChange}
								/>
								Potatos
							</div>
							
							<div>
								Selected option is : {this.state.selectedOption}
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
								<input type="submit" className="button"/>
								
							</div>
							
						</form>
					</div>
				</div>
				

				<a href='./crops' className="button">&#8592; Crops</a>

			</div>
		)
	}
}
