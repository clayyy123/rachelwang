import React, {Component} from "react"
import httpClient from "../httpClient.js"

class Blog extends Component{
  state={
    blogposts:[]
  }
  componentDidMount(){
    httpClient.allPosts().then(serverResponse =>{
      console.log(serverResponse)
      this.setState({
        blogposts: serverResponse.data
      })
    })
  }

  filterHandler(string){
    if (string.length > 300){
      return string.substring(0,300) + ". . ."
    }
  }

  render(){
    return(
      <div className="Blog">
        <h1>Blog </h1>
        {this.state.blogposts.map(post =>{
          return (
            <div>
              <img className="blog-image" src={`${post.imageURL}`}/>
              <h1 className="blog-title" >{post.title}</h1>
              <p className="blog-body">{this.filterHandler(post.body)} <span>Read More</span></p>
             
            </div>
          )
        })}
      </div>
    )
  }
}

export default Blog