// Adding Markdown - insert raw HTML

var Comment = React.createClass({
	rawMarkup: function(){
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	},
	render: function(){
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup() } />
			</div>
			);
	}
});

// var CommentList = React.createClass({
// 	render: function(){
// 		return (
// 			<div className="commentList">
// 			<Comment author="A">A!!!</Comment>
// 			<Comment author="B">B!!! *author*</Comment>
// 			</div>
// 			);
// 	}
// });

class CommentList extends React.Component {
	render(){
		return (
			<div className="commentList">
			<Comment author="A">AA!!!</Comment>
			<Comment author="B">BB!!! *author*</Comment>
			</div>
			);
	}
}


ReactDOM.render(
	<CommentList />,
	document.getElementById('content')
	);


