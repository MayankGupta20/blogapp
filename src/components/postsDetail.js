import React,{Component} from 'react';

class PostDetail extends Component{
    render(){
        console.log("posts detail page ");
        return(
            <div>post details page
                <li>{this.props.match.params.userID}</li>
                <li>{this.props.match.params.postID}</li>
            </div>

        )
        
    }
}

export default PostDetail