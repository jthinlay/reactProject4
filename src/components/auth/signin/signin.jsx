import React from 'react'
import './signin.style.scss'
import {signIn} from '../../../redux/auth/authAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


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
       this.props.signIn(this.state)
       
    }
    render(){
      const {authError, auth} = this.props
      if(auth.uid) return <Redirect to="/" />

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
                        <input type="password" id="password" onChange={this.handleOnChange}  />
                    </div>
                    <div className="submit-button">
                        <button type="submit"> Submit</button>
                    </div>
                    <div className="login_failed_message">
                         <p><i>{authError ? authError : null}</i></p>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('authError:', state)
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)