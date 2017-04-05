import React from 'react';
import { Link } from 'react-router-dom';

//Service
import ShipService from '../../Service/ships.js';

// @todo need to copy assets over to dist

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
				<div className="row">
					<h2>Listings</h2>
				</div>
				<div className="row">
					{
						this.state.ships.map((ship) => {
						let shipUrl = "/ship/" + ship.slug;
						return <div className="col-xs-12 col-sm-6 col-md-4" key={ship.slug}>
							<Link to={shipUrl}>
								<img className="ship-preview" src={"../../app/assets/images/" + ship.slug + "_thumb.jpg"} alt={ship.slug} />
							</Link>
							<Link to={shipUrl}>
								{ship.name}
							</Link>
							<p>{ship.manufacturer}</p>
						</div>
					})}
				</div>
			</div>
		);
	}
}

export default ShipListingPage;