import React from 'react';
import { Link } from 'react-router-dom';

//Service
import ShipService from '../../Service/ships.js';

class ShipListingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 ships: []
		};
	}

	componentDidMount() {
		var self = this
		ShipService.get().then((response) => {
			if(response) {
				self.setState({ ships: response.data.products })
			}
		})
	}

	render() {
		if (!this.state.ships.length) {
			return null;
		}

		return (
			<div>
				<h1>Ships!</h1>
				{this.state.ships.map((ship) => {
					return <div key={ship.slug}>
						<Link to={"/ship/" + ship.slug}>{ship.name}</Link>
					</div>
				})}
			</div>
		);
	}
}

export default ShipListingPage;