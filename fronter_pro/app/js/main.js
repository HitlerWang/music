var React = require('react');
var ReactDOM = require('react-dom');
var Top = require('./container/top');
var Other = require('./container/other');

ReactDOM.render(
	<div>
		<Top/>
		<Other/>
	</div>
	,
	document.getElementById('app')
);



