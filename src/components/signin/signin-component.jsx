import React from 'react';
import './signin.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form action="" onSubmit = {this.handleSubmit} >

                    <FormInput
                        type="email" 
                        handleChange = {this.handleChange} 
                        required 
                        name = "email" 
                        label = 'email'
                        value = {this.state.email}
                    />
    
                    <FormInput
                        type="password" 
                        handleChange= {this.handleChange} 
                        required 
                        name = "password" 
                        label = 'password'
                        value = {this.state.password} 
                    />

                    <div className = 'buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignin> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;