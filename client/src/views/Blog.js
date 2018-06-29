import React, {Component} from "react";
import httpClient from "../httpClient.js";
import Edit from "./EditBlog.js";
import { Button, Fade } from 'reactstrap';
import {Router, Switch, Route, Link} from "react-router-dom";
import Moment from "react-moment";

class Blog extends Component{
  state={
    blogposts:[],
    selectedBlog:{}
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

    })
  }

  selectHandler(id){
    httpClient.datPost(id).then(serverResponse=>{
      this.setState({
        selectedBlog:serverResponse.data
      })  
    })
  }


  deleteHandler(id){
    httpClient.deletePost(id).then(serverResponse=>{
      console.log(serverResponse)
      this.setState({
        blogposts: this.state.blogposts.filter(post => post._id !== serverResponse.data.blog._id)
      })
    })
  }

  render(){
    return(
      <div className="Blog">
      <Switch>
        <Route path="/blogs/edit" render={(props)=>{
          return <Edit {...props} currentUser={this.props.currentUser} blog={this.state.selectedBlog}/>
        }}/>
        <Route path="/blogs" render={()=>{
          return (
            <div>
            <h1>Blog </h1>
            {this.state.blogposts.map((post, index) =>{
              return (
                <div key={index}>
                  <h5><Moment format="MMM Do">{post.createdDate}</Moment></h5>
                  <img className="blog-image" src={`${post.imageURL}`}/>
                  {this.props.currentUser
                    ? 
                    <div>
                    
                      <Link to="/blogs/edit"><span onMouseOver={()=>{this.selectHandler(post._id)}}className="edit-delete">Edit</span></Link><span onClick={()=>{this.deleteHandler(post._id)}} className="edit-delete">Delete</span>
                    
                    </div>
                    :(
                      <div></div>
                    )
                  }
                  <h1 className="blog-title" >{post.title}</h1>
                  
                  {post.isActive
                    ?
                  (
                    <div>
                    <Button onClick={()=>{this.toggleHandler(index)}} >Read Less</Button>
                    <p className="blog-body">{post.body}</p>
                    </div>
                  )
                  :(
                    <div>
                    <Button onClick={()=>{this.toggleHandler(index)}} >Read More</Button>
                    <p className="blog-body">{this.filterHandler(post.body)}</p>
                    </div>
                  )
                  } 
                <hr/>
                </div>
              )
            })}
          </div>
          )}}/>

      </Switch>
      </div>
    )
  }
}

export default Blog