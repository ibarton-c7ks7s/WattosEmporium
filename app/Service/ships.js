import axios from 'axios'
import { slugify } from '../Util/Slugify.js'
import { shipMedia } from '../data/shipMedia.js'

const ShipService = {
	cachePromise : null,
	/**
	* Get Ships from Droid Api
	* use cached promise if available
	*
	* @return {Promise}
	*/
	get : () => {
		if (ShipService.cachePromise == null) {
			ShipService.cachePromise = axios.get('http://demo7475333.mockable.io/spaceships').then((response) => {
				response.data.products.forEach((ship) => {
					ship.slug = slugify(ship.name)
					ship.media = shipMedia[ship.slug]
				})

				return response
			});
		}

		return ShipService.cachePromise
	}
}

export default ShipService;