import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username);
    }
    render() {
        console.log(this.state, ' this is state');
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='username' />
                    <input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='password' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
};

export default Login;
