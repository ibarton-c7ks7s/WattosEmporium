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
					<div className="watto row center-xs">
						<div className="watto--profile">
							<img src="../../app/assets/images/watto.jpg" />
						</div>
						<div className="watto--quote-wrap">
							<blockquote>"You not find a better deal, I think. Eh?"</blockquote>
						</div>
					</div>
					<p className="copyright">Produced by <a href="https://www.linkedin.com/in/kyberry/">Kyler Berry</a></p>
				</footer>
			</div>
		)
	}
}

export default Layout;