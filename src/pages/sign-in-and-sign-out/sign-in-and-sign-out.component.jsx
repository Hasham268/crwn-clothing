import React from 'react';
import './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/signin/signin-component';
import SignUp from '../../components/signup/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);

export default SignInAndSignUpPage;