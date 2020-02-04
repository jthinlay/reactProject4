import React from 'react'
import './signin.style.scss'

class SignIn extends React.Component{
    state = {
        email: '',
        password: ''
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
       console.log(this.state)
    }
    render(){
        return(
            <div className="signin-container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="signin">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleOnChange} />
                    </div>
                    <div className="submit-button">
                        <button type="submit"> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn