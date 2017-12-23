import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import blogReducer from '../reducers/blogReducer'

var store

export default {
	configure: () => {
		const reducers = combineReducers({
			blog: blogReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},
	currentStore: () => {
		return store
	}
}