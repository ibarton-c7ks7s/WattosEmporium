import React from 'react';

//API Service
import ShipService from '../../Service/ships.js';

class ShipListingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 ship: []
		};
	}

	componentDidMount() {
		var self = this
		ShipService.get(self.props.match.params.shipSlug).then((response) => {
			let ship = response.data.products.filter((ship, key) => {
				return ship.slug == self.props.match.params.shipSlug
			})
			self.setState({ ship: ship.shift() })
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.ship.name}</h1>
			</div>
		);
	}
}

export default ShipListingPage