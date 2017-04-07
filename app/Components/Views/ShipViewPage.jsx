import React from 'react'
import { Link } from 'react-router-dom'

//API Service
import ShipService from '../../Service/ships.js';

/**
* Embeds 3d model with fallback to image
*
* @param {Object} props
* @return {JSX}
*/
function ModelEmbed(props) {
	if (!props.media.embed) {
		return (
			<div><img src={props.media.image}/></div>
		)
	} else {
		return (
			<div className="sketchfab-embed-wrapper">
				<iframe width="640" height="480" src={props.media.embed} frameBorder="0"></iframe>
			</div>
		)
	}	
}

/**
* Renders schematic row in the Spec table 
*
* @param {Object} props
* @return {JSX}
*/
function SchematicRow(props) {
	if(!props.schematic) {
		return null
	}

	return (
		<tr>
			<td className="schematic" colSpan="2">
				<a href={props.schematic} target="_blank">
					View Schematics
				</a>
			</td>
		</tr>
	)
}

/**
* Tech Specs Table
*
* @param {Object} props
* @return {JSX}
*/
function SpecsTable(props) {
	const humanizedSpecNames = {
		'maxaccel' : 'max acceleration',
		'maxatmosphericspeed' : 'max speed'
	}

	let specKeys = Object.keys(props.data.techspecs)
	return (
		<table className="spec-table">
			<tbody>
				<SchematicRow schematic={props.data.media.schematic} />
				
				<tr>
					<th>class</th>
					<td>{props.data.class}</td>
				</tr>
			{
				specKeys.map(keyName => {
					return (
						<tr key={keyName}>
							<th>{humanizedSpecNames[keyName] ? humanizedSpecNames[keyName] : keyName}</th>
							<td>{props.data.techspecs[keyName]}</td>
						</tr>
					)
				})
			}
			</tbody>
		</table>
	)
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
		if (!this.state.ship) {
			return null;
		}

		let media = this.state.ship.media
		media.image =  "../../app/assets/images/" + this.state.ship.slug + ".jpg"

		return (
			<section className="container-fluid">
				<span>
					&lt;&nbsp;<Link className="breadcrumb" to="/">Back to listings</Link>
				</span>
				<section className="row">
					<div className="col-xs-12 col-sm-7 animated fadeIn">
						<header>
							<h1 className="ship-title">{this.state.ship.name}</h1>
							<p className="ship-manufacturer">{this.state.ship.manufacturer}</p>
						</header>
						<ModelEmbed media={media}/>
						<div className="ship-description">{media.description}</div>
					</div>
					<div className="col-xs-12 col-sm-5 animated slideInRight">
						<div className="purchase">
							<p className="purchase--price">{this.state.ship.price}</p>
							<a className="button" href="#">Buy</a> 
						</div>
						<SpecsTable data={this.state.ship} />
					</div>
				</section>
			</section>
		);
	}
}
/*<tr>
					<th>Schematics</th>
					<td>
						<a href={props.data.media.schematic} target="_blank">
							<img src={props.data.media.schematic} />
						</a>
					</td>
				</tr>*/
/*<div><a href={media.schematic} target="_blank">Ship Schematics</a></div>*/
export default ShipListingPage