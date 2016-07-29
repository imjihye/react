// Reactive state

var CommentBox = React.createClass({
	getInitialState: function(){ // return initial this.state
		return {data:[]};
	},
	render: function(){
		return (
			<div className="commentBox">
			<h1>CommetBox</h1>
			<CommentForm />
			<CommentList data={this.state.data} />
			</div>
			);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
			Hello! I am a CommentForm!
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>;
		});

		return (
			<div className="commentList">
			{commentNodes}
			</div>
			);
	}
});

var Comment = React.createClass({
	rawMarkup: function(){
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return ({__html:rawMarkup});
	},
	render: function(){
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
			);
	}
});

var data = [
{id:1, author:'A', text:'AAA!!'},
{id:2, author:'B', text:'BBB!! *authr*'}];

ReactDOM.render(
	// <CommentBox data={data} />,
	<CommentBox url="/api/comments" />,
	document.getElementById('content')
	);