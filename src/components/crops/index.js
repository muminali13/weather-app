// import preact
import { h, Component } from 'preact';


export default class Crops extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<div class="container">
					<h1>Crops</h1>

					<button class="button">Add Crop</button>

					<div class="myCrops">
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

					<div class="addCrop">
						<h2>Add Crop</h2>
						<form>
							<div class="cropName">
								<label>Crop Name:</label><br/>
								<input type="radio" id="straw" name="cropName" value="Strawberries"/>
								<label for="html">Strawberries</label><br/>
								<input type="radio" id="corn" name="cropName" value="Corn"/>
								<label for="html">Corn</label><br/>
								<input type="radio" id="carrot" name="cropName" value="Carrots"/>
								<label for="html">Carrots</label><br/>
								<input type="radio" id="pea" name="cropName" value="Peas"/>
								<label for="html">Peas</label><br/>
								<input type="radio" id="potato" name="cropName" value="Potato"/>
								<label for="html">Potato</label><br/>
							</div>
							<br/>
							<div class="harvestTime">
								<label>Harvest time:</label><br/>
								<input type="number" name="harvest" min="1"/>
							</div>
						</form>
					</div>
				</div>
				
				

				<a href='../' class="button">&#8592; Home</a>
			</div>
		)
	}
}
