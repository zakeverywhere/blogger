import React, { Component } from 'react'
import Blogs from './Blogs'

class Home extends Component {
	render(){
		return (

			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<Blogs />
					</div>
				</div>
			</div>
		)
	}
}

export default Home