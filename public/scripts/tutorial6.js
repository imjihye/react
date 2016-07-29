// Adding Markdown - create raw HTML

var Comment = React.createClass({
	render: function(){
		var md = new Remarkable();
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.author}
			</h2>
			{md.render(this.props.children.toString())}
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
			<Comment author="A">A!!!</Comment>
			<Comment author="B">B!!! *auther*</Comment>
			</div>
			);
	}
});


ReactDOM.render(
	<CommentList />,
	document.getElementById('content')
	);