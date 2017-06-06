import React from 'react'
import { Link } from 'react-router'
import TwitterIcon from '-!babel!svg-react!../../assets/img/twitter.svg'
import GithubIcon from '-!babel!svg-react!../../assets/img/github.svg'
import LinkedinIcon from '-!babel!svg-react!../../assets/img/linkedin.svg'

class Header extends React.Component {
	render() {
		return (
			<nav className="flex flex-wrap flex-nowrap-l justify-between-l items-center-l">
				<div className="w-100 w-auto-l">
					<h1 className="mt5-l">
						<Link
							to="/"
							id="logo"
							className="astloch blue link f-subheadline flex justify-center justify-start-l"
							onClick={this.props.updateTheme.bind(null, 'home')}>
							tom hughes
					</Link>
					</h1>
					<h2 className="flex justify-center justify-start-l">js engineer<span className="astloch">&nbsp;&amp;&nbsp;</span>designer</h2>
					<ul className="social-links list pr0 flex items-center justify-around justify-start-l w-100 w-auto-l">
						<li className="">
							<a href="https://twitter.com/tomhuhges" className="menu-item" target="_blank">
								<TwitterIcon className="w2" />
							</a>
						</li>
						<li>
							<a href="https://github.com/tomhuhges" className="menu-item" target="_blank">
								<GithubIcon className="w2" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/tom-hughes-57b12080" className="menu-item" target="_blank">
								<LinkedinIcon className="w2" />
							</a>
						</li>
					</ul>
				</div>
				<ul className="nav-links blue list pr0 pb3-l flex justify-between w-100 w-475-l">
					<li><Link to="/code" id="code-link" className="link underline-hover blue" onClick={this.props.updateTheme.bind(null, 'code')}># code</Link></li>
					<li><a href="http://crap.tomhuhges.com/" id="art-link" className="link underline-hover blue" target="_blank"># art</a></li>
					{/* <li><Link to="/code" id="writing-link" className="link underline-hover blue"># writing</Link></li> */}
					<li><Link to="/linkdump" id="linkdump-link" className="link underline-hover blue" onClick={this.props.updateTheme.bind(null, 'linkdump')}># link dump</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Header
