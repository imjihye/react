// My first component - JSX Syntax

var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function(){
		return (
			React.createElement('div', {className: "commentBox"},
				"Hello, world! I am a CommentBox."
				)
			);
	}
});

ReactDOM.render(
	React.createElement(CommentBox, null, null),
	document.getElementById('content')
	);