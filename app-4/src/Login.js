import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleUsername(name){
        this.setState({username:name})
    }
    handlePassword(pass){
        this.setState({password:pass})
    }
    handleLogin(){
        alert(`Logging in with Username of ${ this.state.username } and Password of ${ this.state.password }`);
    }
    render(){
        return (
            <div>
                <br />
                <input 
                onChange={e => this.handleUsername(e.target.value)} 
                type="text"
                placeholder="Username"/>
                <input 
                    onChange={e => this.handlePassword(e.target.value)} 
                    type="text"
                    placeholder="Password"/>
                <button onClick={ this.handleLogin }></button>
            </div>
        )
    }
}

export default Login