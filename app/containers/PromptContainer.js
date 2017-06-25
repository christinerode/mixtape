var React = require('react');

var PromptContainer = React.createClass({
	render: function () {
		return (
		  <div className="">
		  	<h1>SOME HEADER TEXT</h1>
		  	<form>
		  		<div className="form-group">
		  			<input
		  			className="form-control"
		  			placeholder="Github Username"
		  			type="text" />
		  		</div>
		  		<div>
		  			<button type="submit">
		  			Continue
		  			</button>
		  		</div>
		  	</form>
		  </div>
		)
	}

});

module.exports = PromptContainer;