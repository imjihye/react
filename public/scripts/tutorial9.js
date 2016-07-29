// Hook up the data model 

class Comment extends React.Component {
	rawMarkup(){
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return {__html:rawMarkup};
	}

	render(){
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
			);
	}
}

// var CommentList = React.createClass({
// 	render: function(){
// 		var commentNodes = this.props.data.map(function(comment){
// 			return (
// 				<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
// 				);
// 		});

// 		return (
// 			<div className="commentList">
// 			{commentNodes}
// 			</div>
// 			);
// 	}
// });

function CommentList({data}){
	var commentNodes = data.map(function(comment){
		return (
			<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
			);
	});

	return (
		<div className="commentList">
		{commentNodes}
		</div>
		);
}


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

function CommentForm(){
	return (
		<div className="commentForm">
		Hello! I am a CommentForm!
		</div>
		);
}

function CommentBox({data}){
	return (
		<div className="commentBox">
		<h1> CommentBox </h1>
		<CommentForm />
		<CommentList data={data} />
		</div>
		);
}


var data = [
{id:1, author:"AAA", text:"AAAA"},
{id:2, author:"BBB", text:"BBBB *author*"}
];
ReactDOM.render(
	<CommentBox data={data} />,
	// React.createElement(
	// CommentBox,
	// {data={data}},
	// null),
	document.getElementById('content')
	);









