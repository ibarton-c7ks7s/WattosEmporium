import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

//Components
import Layout from './Components/Layout.jsx';
import ShipListingPage from './Components/Views/ShipListingPage.jsx';
import ShipViewPage from './Components/Views/ShipViewPage.jsx';

//Styles
import './Sass/main.scss';

// @todo include font-awesome icons
// @todo should extract css to separate files
// @todo get autoprefixer

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Layout>
					<Route exact path="/" component={ShipListingPage}/>
					<Route path="/ship/:shipSlug" component={ShipViewPage}/>
				</Layout>
			</HashRouter>
		)
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('app')
)
