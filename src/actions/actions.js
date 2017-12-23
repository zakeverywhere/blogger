import constants from '../constants'

export default {
	blogsReceived : (blogs) => {
		return {
			type: constants.BLOGS_RECEIVED,
			blogs: blogs
		}
	}
}