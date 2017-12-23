import React, { Component } from 'react'

class Blog extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

export default Blog