import React from 'react'
import './signup.style.scss'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../../redux/auth/authAction'


class SignUp extends React.Component{
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
       this.props.signUp(this.state)
    }
    render(){
        const {auth, authError} = this.props
        if(auth.uid) return <Redirect to="/" />
        return(
            <div className="signin-container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="signin">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleOnChange} />
                    </div>
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
                    {authError ? <p>{authError}</p> : null}
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)