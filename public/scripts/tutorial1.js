// My first component

// React Component is upper-case
var CommentBox = React.createClass({
	render: function(){
		// HTML tag is lower-case
		var myDiv = <div className="commentBox">
		Hello, world! I am a CommentBox.
		</div>;
		
		return (
			myDiv
			);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
	);
