import React, { Component } from 'react';
import { Link } from 'react-router'

class Blog extends Component{
	render(){
		return(
			<div>
				<h2>Blog</h2>
				<ul>
	        <li><Link activeStyle={{color: 'red'}} to="/blog/123">Blog 1</Link></li>
	      	<li><Link activeStyle={{color: 'yellow'}} to="/blog/456">Blog 2</Link></li>
	        <li><Link activeStyle={{color: 'blue'}} to="/blog/789">Blog 3</Link></li>
	      </ul>
	      {this.props.children}
	    </div>
		);
	}
}

export default Blog;