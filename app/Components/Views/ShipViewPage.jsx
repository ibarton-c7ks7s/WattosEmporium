import React from 'react';

//API Service
import ShipService from '../../Service/ships.js';

function ModelEmbed(props) {
	return (<div className="sketchfab-embed-wrapper">
		<iframe width="640" height="480" src={props.media.embed} frameBorder="0"></iframe>
	</div>)
}

class ShipListingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 ship: null
		};
	}

	componentDidMount() {
		var self = this
		window.scrollTo(0, 0)
		ShipService.get(self.props.match.params.shipSlug).then((response) => {
			let ship = response.data.products.filter((ship, key) => {
				return ship.slug == self.props.match.params.shipSlug
			})
			self.setState({ ship: ship.shift() })
		})
	}

	render() {
		if(!this.state.ship) {
			return null;
		}

		return (
			<div>
				<h1>{this.state.ship.name}</h1>
				<ModelEmbed media={this.state.ship.media}/>
			</div>
		);
	}
}

export default ShipListingPage