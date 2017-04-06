import React from 'react';

class Layout extends React.Component {
	render(){
		return(
			<div>
				<header className="site-header animated slideInDown">
					<div className="container-fluid">
						<div className="row center-xs">
							<div className="col-xs">
								<h1 className="site-header--title">Watto’s Space Emporium</h1>
								<p className="site-header--subtitle">These <em>are</em> the ships you’re looking for</p>
							</div>
						</div>
					</div>
				</header>
				<div className="content">
					<div className="wrapper">
						{this.props.children}
					</div>
				</div>
				<footer className="site-footer">
					<div className="message-from-watto">
						{
							//image of watto
						}
						<p>"You not find a better deal, I think. Eh?"</p>
					</div>
					<p className="copyright">© Watto’s Emporium</p>
				</footer>
			</div>
		)
	}
}

export default Layout;