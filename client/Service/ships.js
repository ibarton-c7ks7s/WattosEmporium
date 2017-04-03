import axios from 'axios'
import { slugify } from '../Util/Slugify.js'

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
				})

				return response
			});
		}

		return ShipService.cachePromise
	}
}

export default ShipService;