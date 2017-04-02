import React from 'react';
import { render } from 'react-dom';

import Layout from './Components/Layout.jsx';
import ShipListingPage from './Components/Views/ShipListingPage.jsx';
import ShipViewPage from './Components/Views/ShipViewPage.jsx';

import { BrowserRouter, Route, Link } from 'react-router-dom';

render(
	<BrowserRouter>
		<Layout>
			<Route exact path="/" component={ShipListingPage}/>
			<Route path="/ship" component={ShipViewPage}/>
		</Layout>
	</BrowserRouter>,
	document.getElementById('app')
);