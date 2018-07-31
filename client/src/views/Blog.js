import React, {Component} from "react";
import httpClient from "../httpClient.js";
import Edit from "./EditBlog.js";
import { Button, Fade } from 'reactstrap';
import {Router, Switch, Route, Link} from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from "react-moment";

class Blog extends Component{
  state={
    blogposts:[],
    selectedBlog:{},
    modal: false
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
      console.log(serverResponse)
      this.setState({
        selectedBlog:serverResponse.data
      })  
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  deleteHandler(id){
    httpClient.deletePost(id).then(serverResponse=>{
      console.log(serverResponse)
      this.setState({
        blogposts: this.state.blogposts.filter(post => post._id !== serverResponse.data.blog._id),
        modal: !this.state.modal
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
              <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
                    <ModalHeader toggle={this.toggle.bind(this)}>Delete Post</ModalHeader>
                    <ModalBody>
                    Are you sure you want to delete this post?
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={()=>this.deleteHandler(this.state.selectedBlog._id)}>Delete</Button>
                      <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </div>
              <div className="blog-header">
                <h1 className="blog-name">Rachel Wang</h1>
                <p className="lead">A yogi who looks to inspire others.</p>
              </div>
              {/* {!this.state.blogposts[0]
                ?
                (
                  <h1> Blog Posts Coming Soon! </h1>
                )
                :(
                  
                )
              } */}
            {this.state.blogposts.map((post, index) =>{
              return (
                <div key={index}>
                  <h1 className="blog-title" >{post.title}</h1>
                  <h5 id="date" ><Moment format="MMM Do, YYYY">{post.createdDate}</Moment></h5>
                  <img className="blog-image" src={`${post.imageURL}`}/>

                  {this.props.currentUser
                    ? 
                    <div>
                    
                      <Link to="/blogs/edit"><span onMouseOver={()=>{this.selectHandler(post._id)}} className="edit-delete">Edit</span></Link><span onMouseOver={()=>{this.selectHandler(post._id)}} onClick={this.toggle.bind(this)} className="edit-delete">Delete</span>
                    
                    </div>
                    :(
                      <div></div>
                    )
                  }
                  
                  
                  {post.isActive
                    ?
                  (
                    <div className="blog-body-holder">
                    <span className="toggle-button" onClick={()=>{this.toggleHandler(index)}}>Read Less</span>
                    <p className="blog-body">{post.body}</p>
                    </div>
                  )
                  :(
                    <div className="blog-body-holder">
                    <span className="toggle-button" onClick={()=>{this.toggleHandler(index)}}>Read More</span>
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