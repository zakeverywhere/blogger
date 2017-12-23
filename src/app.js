import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './stores/store'

class App extends Component {
	render() {
		return (
			<Provider store={ store.configure() } >
				<div> 
					hello, we are doing react!
					<Home />
				</div>
			</Provider>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'))