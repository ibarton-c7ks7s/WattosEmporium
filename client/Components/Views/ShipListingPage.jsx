import React from 'react';
import { Link } from 'react-router-dom';

export default class ShipListingPage extends React.Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Ships!</h1>
				<Link to="/ship">ok go to ship</Link>
			</div>
		);
	}
}