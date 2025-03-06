import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../components/common/Input'
import FormInput from '../components/FormInput'
import Label from '../components/common/Label'
import { useUserAcct } from '../state/Login'
import axios from 'axios'
import { EyeOff, Eye } from 'lucide-react';
import { signInSchema } from './zod_schema/ZodSchema'
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from '../components/InputError'
import { Ring } from "@uiball/loaders";
import { Toaster, toast } from "sonner";

export default function SignIn() {
    const { setUser, email, password } = useUserAcct()
    const [ isVisible, setVisible ] = useState<boolean>(false)
    const [ isSignIn, setSignIn ] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signInSchema)
    });

    function clearData() {
        setUser({
            ...Form,
            email: '',
            password: ''
        })
    }
    
    //Handle data for registration of new user
    async function handeRegister(data: any) {
        console.log(data)

        try {
            setSignIn(true)
        } catch (error) {
            
        }

        // try {
        //     setSignUp(true)

        //     const userData = {
        //         username: username,
        //         faveDrama: faveDrama,
        //         email: email,
        //         password: password
        //     }

        //     const response = await axios.post('http://localhost:5000/api/user/register', userData)
        //     if(response.data.message === 'User registered successfully!') {
        //         setSignUp(false)
        //         toast.success("Registration successful!", {
        //             duration: 3000,
        //             description: "You can now log in to your account.",
        //         });
        //         clearData()
        //     }
        // } catch (error: any) {
        //     setSignUp(false);
        //     if (error.response && error.response.status === 400) {
        //         toast.error("Registration unsuccessful!", {
        //             duration: 3000,
        //             description: error.response.data.message || "Email is already registered!"
        //         });
        //     } else {
        //         toast.error("Something went wrong!", {
        //             duration: 3000,
        //             description: "Please try again later."
        //         });
        //     }
        // }
    }

    return (
        <div className='py-7 px-6 md:px-12 xl:px-36'>
            <Toaster position="top-right" />
            <h1 className='text-2xl font-semibold'>Sign In to your account</h1>
            <p>Welcome back! Please enter your credentials to access your account. If you don’t have an account yet, signing up is quick and free. Fill in the details below to continue.</p>
            <div className='h-full md:h-[600px] flex mt-5 gap-12'>
                <div className='w-96 hidden md:block'>
                    {/**Change this later based on New kdrama released that day */}
                    <div className='h-full w-full relative'>
                        <Image
                            fill
                            alt='Authentication Image'
                            src={'/authImage.jpg'}
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL='/placeholder.png'
                        />
                    </div>
                </div>

                {/**User form input */}
                <form action='/register' onSubmit={handleSubmit(handeRegister)} className='w-full md:w-[25rem] h-auto flex flex-col gap-4'>
                    <FormInput>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            {...register('email')}
                            value={email}
                            onChange={(e)=> setUser({ email: e.target.value })}
                            type='email'
                        />
                        <InputError>{errors.email?.message}</InputError>
                    </FormInput>

                    <div className='relative'>
                        <FormInput>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                {...register('password')}
                                value={password}
                                onChange={(e)=> setUser({ password: e.target.value })}
                                type={`${isVisible ? 'text' : 'password'}`}
                            />
                            <InputError>{errors.password?.message}</InputError>
                        </FormInput>
                        
                        {/**For  */}
                        <EyeOff className={`${!isVisible ? 'absolute right-3 bottom-2.5' : 'hidden'}`} size={20} onClick={()=> setVisible(!isVisible)} color='gray'/>
                        <Eye className={`${isVisible ? 'absolute right-3 bottom-2.5' : 'hidden'}`} size={20} onClick={()=> setVisible(!isVisible)} color='gray'/>
                    </div>
                   
                    <div className='mt-6'>
                        <p>Don't have an account? <span className='text-blue-600'>Create an account</span> </p>
                        <button type='submit' className='w-full mt-2 rounded-lg text-white font-semibold font-mono bg-blue-600 h-10 flex justify-center items-center' disabled={isSignIn}>{isSignIn ? (
                            <Ring size={20} lineWeight={5} speed={2} color="white" />
                        ) : 'Sign In'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}