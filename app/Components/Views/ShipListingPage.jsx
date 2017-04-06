import React from 'react';
import { Link } from 'react-router-dom';

//Service
import ShipService from '../../Service/ships.js';

// @todo need to copy assets over to dist

/**
* Ship Price Element
*
* @param {Object} props
* @return {JSX}
*/
function Price(props) {
	return <p className="ship-preview--price">{props.price}</p>
}

/**
* Ship Price Element if No Price
*
* @return {JSX}
*/
function NoPrice() {
	return <p className="ship-preview--no-price">Contact for price</p>
}

/**
* Ship Price Handler
*
* @param {Object} props
* @return {JSX}
*/
function PriceCallout (props) {
	if (props.price) {
		return <Price price={props.price} />
	} else {
		return <NoPrice />
	}
}

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
			<div className="container-fluid">
				<div className="row">
					<h2>Listings</h2>
				</div>
				<div className="row">
					{
						this.state.ships.map((ship) => {
						let shipUrl = "/ship/" + ship.slug;
						return <div className="col-xs-12 col-sm-6 col-md-4 ship-preview animated fadeIn" key={ship.slug}>
							<Link to={shipUrl}>
								<img className="ship-preview--img" src={"../../app/assets/images/" + ship.slug + "_thumb.jpg"} alt={ship.slug} />
							</Link>
							<Link className="ship-preview--name" to={shipUrl}>
								{ship.name}
							</Link>
							<p className="ship-preview--manufacturer">{ship.manufacturer}</p>
							<PriceCallout price={ship.price}/>
						</div>
					})}
				</div>
			</div>
		);
	}
}

export default ShipListingPage;