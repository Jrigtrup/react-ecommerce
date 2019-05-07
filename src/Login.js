import React from 'react';
import ReactDOM from 'react-dom'
import './Login.css';

class LoginForm extends React.Component {
 
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="Username..." />
        <input type="password" ref="password" placeholder="Password..." />
        <input type="submit" value="Login" />
      </form>
    )
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
            :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    ) 
  }
}

const Welcome = ({user, onSignOut})=> {
  return (
    <div>
      Welcome! <strong>{user.username}</strong>!
      <a href="" onClick={onSignOut}> Sign out</a>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("app"))


export default App;