import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	// console.log(token)
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: '/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/user/new', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

httpClient.defaults.headers.common.token = httpClient.getToken()

httpClient.postBlog = function(info) {
	return this({method:"post", url: "/blogs/new", data: info})
}

httpClient.allPosts = function (){
	return this({method:"get", url:"/api/blogs"})
}

httpClient.editPost = function (info){
	return this({method:"patch", url:`/blogs/update/${info._id}`, data: info})
}

httpClient.datPost = function(id){
	return this({method:"get", url: `/blogs/${id}`})
}


httpClient.deletePost = function (id) {
	return this({method:"delete", url: `/blogs/delete/${id}`})
}
export default httpClient