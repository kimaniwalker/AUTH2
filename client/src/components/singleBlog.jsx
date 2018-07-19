import React, { Component } from 'react';
import { render } from 'react-dom';

class SingleBlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }

   async componentDidMount() {
        try {
            let res = await fetch('/api/blogList/' + this.props.match.params.id);
            let data = await res.json();
            console.log(data);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }
    }
    
    render() {

        console.log(this.state.blog);
        return (
            <div>
                {this.state.blog.title}
                {this.state.blog.content}
                </div>
        );
    }
}

export default SingleBlogPost;