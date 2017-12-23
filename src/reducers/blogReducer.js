import constants from '../constants'

var initialState = {
	blogsList: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.BLOGS_RECEIVED:
			
			let updated = Object.assign({}, state)
			updated['blogsList'] = action.blogs
			console.log('getting the blogList in reducer')
			return updated
			break;

		default:
			return state
	}
}