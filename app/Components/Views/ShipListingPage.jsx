import React from 'react';
import { Link } from 'react-router-dom';

//Service
import ShipService from '../../Service/ships.js';

// @todo need to copy assets over to dist
// @todo need pricecallout as it's own component

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
			<div className="container-fluid animated fadeIn">
				<div className="heading">
					<h2 className="heading--title">Listings</h2>
					<p  className="heading--subtitle">These <strong>are</strong> the ships you’re looking for.</p>
				</div>
				<div className="row">
					{
						this.state.ships.map((ship) => {
						let shipUrl = "/ship/" + ship.slug;
						return <div className="col-xs-12 col-sm-6 col-md-4 ship-preview" key={ship.slug}>
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