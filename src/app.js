import React from 'react';
import ReactDOM from 'react-dom';
import Snow from 'react-snow-effect';
require('css!./css/style.css');

let Site = React.createClass({
	render: function () {
		return <Snow />;
	}
});

ReactDOM.render(
	<Site />,
	document.getElementById('snow')
);