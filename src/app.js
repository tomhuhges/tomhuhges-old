import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from './components/Header'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { classNames: 'bg-light-green blue' }
		this.getThemeClass = this.getThemeClass.bind(this)
	}
	componentDidMount() {
		const location = this.props.location.pathname.replace('/', '')
		this.getThemeClass(location)
	}
	getThemeClass(page) {
		const classNames = page === 'code' ? 'bg-yellow dark-red' :
		page === 'linkdump' ? 'bg-white blue' :
		'bg-light-green blue'
		this.setState({ classNames })
	}
	render() {
		return (
			<div>
				<div
					id="main"
					className={`page ${this.state.classNames} code flex justify-center pa4-m w-100 minh-100`}>
					<div className="container w-90 mw6-m mw8-l">
						<Header updateTheme={this.getThemeClass}/>
						<ReactCSSTransitionGroup
							transitionName="fade"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={1}>
						{React.cloneElement(this.props.children, {
							key: this.props.location.key
						})}
						</ReactCSSTransitionGroup>
					</div>
				</div>
			</div>
		)
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
}

export default App
