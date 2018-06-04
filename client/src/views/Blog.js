import React, {Component} from "react"
import httpClient from "../httpClient.js"
import { Button, Fade } from 'reactstrap';

class Blog extends Component{
  state={
    blogposts:[],
    show: false,
    currentBlog:{}
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

  toggleHandler(index) {
    let tmp = this.state.blogposts
    tmp[index].isActive = !tmp[index].isActive
    this.setState({
        
    });
}

  render(){
    return(
      <div className="Blog">
        <h1>Blog </h1>
        {this.state.blogposts.map((post, index) =>{
          return (
            <div key={index}>
              <img className="blog-image" src={`${post.imageURL}`}/>
              <h1 className="blog-title" >{post.title}</h1>
              <Button onClick={()=>{this.toggleHandler(index)}} >Read More</Button>
              {post.isActive
                ?
              (
                <p className="blog-body">{post.body}</p>
              )
              :(
                <p className="blog-body">{this.filterHandler(post.body)}</p>
              )
              } 
             
            </div>
          )
        })}
      </div>
    )
  }
}

export default Blog