import React,{Component} from 'react';

class PostDetail extends Component{
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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.postID)
        if (response.ok) {
          const posts = await response.json()
         
          this.setState({ posts:posts, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
        }
      }
      renderPosts = () => {
       
        
                return(
                    <div>
                        
                        <li>Title : {this.state.posts.title}</li>
                        <ul>{this.state.posts.body}</ul>
                    </div>  
                )
            

          
      
      }


    render(){

        
        
        
        return(
            <div>
                {this.renderPosts()}
                
            </div>

        )
        
    }
}

export default PostDetail