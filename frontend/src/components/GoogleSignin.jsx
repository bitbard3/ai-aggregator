import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleSignin() {
    const onSignupSuccessHandler = () => { }
    const onSignupErrorHandler = () => { }
    return (
        <div className="mt-5">
            <GoogleLogin theme='filled_black'
                size='large'
                onSuccess={onSignupSuccessHandler}
                onError={onSignupErrorHandler}
            />;
        </div>
    )
}
