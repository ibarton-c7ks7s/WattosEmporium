import React from 'react';

class Layout extends React.Component {
	render(){
		return(
			<div>
				<div className="site-header">
					<h1 className="site-header--title">Watto’s Space Emporium</h1>
					<p className="site-header--subtitle">These <em>are</em> the ships you’re looking for</p>
				</div>
				<section className="content" >
					{this.props.children}
				</section>
			</div>
		)
	}
}

export default Layout;