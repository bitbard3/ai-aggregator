import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom";

export default function GoogleSignin() {
    const { toast } = useToast()
    const navigate = useNavigate();
    const onSignupSuccessHandler = async (data) => {
        try {
            console.log(data)
            const res = await axios.post('http://localhost:3000/user/signup', { googleJwt: data.credential })
            const token = res.data.token
            localStorage.setItem('token', token)
            toast({
                description: 'Signed in successfully',
                variant: 'success'
            })
            navigate('/models')
        } catch (error) {
            if (error.response.status == 403) {
                toast({
                    description: 'User already exist',
                    variant: 'destructive'
                })
            }
        }
    }
    const onSignupErrorHandler = () => { }
    return (
        <div className="mt-5">
            <GoogleLogin theme='filled_black'
                size='large'
                width={'250'}
                onSuccess={onSignupSuccessHandler}
                onError={onSignupErrorHandler}
            />;
        </div>
    )
}
