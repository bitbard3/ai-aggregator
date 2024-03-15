import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom";

export default function GoogleSignin({ form }) {
    const { toast } = useToast()
    const navigate = useNavigate();
    const onSignupSuccessHandler = async (data) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_URL}/user/${form}`, { googleJwt: data.credential })
            const token = res.data.token
            localStorage.setItem('token', token)
            if (form == 'Login') {
                toast({
                    description: 'Logged in successfully',
                    variant: 'success'
                })
            } else {
                toast({
                    description: 'Signed in successfully',
                    variant: 'success'
                })
            }
            navigate('/models')
        } catch (error) {
            if (error.response.status == 403) {
                toast({
                    description: 'User already exist',
                    variant: 'destructive'
                })
                return
            }
            if (error.response.status == 404) {
                toast({
                    description: "User doesn't exist!",
                    variant: 'destructive'
                })
                return
            }
            else {
                toast({
                    description: 'Something went wrong',
                    variant: 'destructive',
                })
            }
        }
    }
    const onSignupErrorHandler = () => {
        toast({
            description: 'Something went wrong',
            variant: 'destructive',
        })
    }
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
