import React from 'react';
import ReactDOM from 'react-dom';

let Site = React.createClass({
	render: function () {
		return (<p>hiya</p>);
	}
});

ReactDOM.render(
	<Site />,
	document.getElementById('app')
);