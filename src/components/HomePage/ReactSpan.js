import React from 'react'

class ReactSpan extends React.Component {
	render() {
		return (
			<strong>
				<span style={{color: 'red'}}>r</span>
				<span style={{color: 'yellow'}}>e</span>
				<span style={{color: 'lime'}}>a</span>
				<span style={{color: 'magenta'}}>c</span>
				<span style={{color: 'orange'}}>t</span>
			</strong>
		)
	}
}

export default ReactSpan