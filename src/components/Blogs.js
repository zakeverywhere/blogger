import React, { Component } from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'
import store from '../stores/store'
import actions from '../actions/actions'

class Blogs extends Component {
	componentDidMount () {
		let blogsList = [{
			title: 'test reducer 1',
			content: 'testing'
		},
		{
			title: 'test reducer 2',
			content: 'testing 22'
		}]
		this.props.blogsReceived(blogsList)
		console.log('blogs are mounted')
	}

	render() {
		const listItems = this.props.blogsList.map((blog, i)=>{
			return (
				<Blog key={i} title={blog.title} content={blog.content}> </Blog>
			)
		})

		const listItems2 = this.props.blogsList.map((blog, i)=>{
			return (
				<Blog key={i} title={blog.title} content={blog.content}> </Blog>
			)
		})

		return (
			<div>
				{listItems}
				{listItems2}
				<Blog title='blah' content='blah1'/>
				<Blog title='blah2' content='blah1'/>
				<Blog title='blah4' content='blah1'/>
				<Blog title='blah4' content='blah1'/>
				<Blog title='blah4' content='blah1'/>
				<Blog title='blah4' content='blah1d'/>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		blogsList: state.blog.blogsList
	}
}
const dispatchToProps = (dispatch) => {
	return {
		blogsReceived: (blogs) => {dispatch(actions.blogsReceived(blogs))}
	}
}
export default connect(stateToProps,dispatchToProps)(Blogs)