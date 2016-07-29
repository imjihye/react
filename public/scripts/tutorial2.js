// Composing components

var CommentList = React.createClass({
	render:function(){
		return (
			<div className="commentList">
			Hello, world! I am a CommentList.
			</div>
			);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
			Hello, world! I am a CommentForm.
			</div>
			);
	}
});


// ReactDOM.render(
// 	// React.createElement(CommentList,null),
// 	<CommentList />,
// 	document.getElementById('content')
// 	);