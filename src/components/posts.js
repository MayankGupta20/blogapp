import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Post extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
          posts:[],
          isLoading: false,
          isError: false
        }
      }

      async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        if (response.ok) {
          const posts = await response.json()
          console.log("postsss:");
          console.log(posts);
          console.log(posts.length);
          this.setState({ posts:posts, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
        }
      }
      renderPosts = () => {
        return this.state.posts.map(post => {
            console.log("posts:");
            console.log(post);
            if(post.userId==this.props.match.params.userID){
                return(
                    <div>
                        
                        <li><Link to={`/posts/${this.props.match.params.userID}/${post.id}`}>{post.title}</Link></li>
                    </div>  
                )
            }

          
        })
      }

    render(){
        console.log(this.state.posts);
        const { posts, isLoading, isError } = this.state
    
        if (isLoading) {
          return <div>Loading...</div>
        }
    
        if (isError) {
          return <div>Error</div>
        }
    
        return(
            <div>
                {this.renderPosts()}
            </div>
        )
          
//<li>{post.userId}</li>
//<li>{this.props.match.params.userID}</li>
        
    }
}



export default Post;