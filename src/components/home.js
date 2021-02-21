import reactDom from "react-dom";
import React ,{Component} from 'react'

import {Link} from 'react-router-dom';
class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
          users: [],
          isLoading: false,
          isError: false
        }
      }
    
        async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (response.ok) {
          const users = await response.json()
          this.setState({ users, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
        }
      }

      renderTableHeader = () => {
        return(            
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Company</td>
                <td>Posts</td>
            </tr>
        )
      }

      renderTableRows = () => {
        return this.state.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
              <td><Link to={`/posts/${user.id}`}>Click to view User Posts</Link></td>
            </tr>
          )
        })
      }


    render() {
        const { users, isLoading, isError } = this.state
    
        if (isLoading) {
          return <div>Loading...</div>
        }
    
        if (isError) {
          return <div>Error</div>
        }
    
        return users.length > 0
          ? (
            <table> 
                 
              <thead>
                
                  {this.renderTableHeader()}
              </thead>
              <tbody>
                {this.renderTableRows()}
              </tbody>
            </table>
          ) : (
            <div>
              No users.
          </div>
          )
      }
}

export default Home