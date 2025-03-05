import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../components/common/Input'
import FormInput from '../components/FormInput'
import Label from '../components/common/Label'
import { useUserStore } from '../state/Register'
import axios from 'axios'
import { EyeOff, Eye } from 'lucide-react';

export default function SignUp() {
    const { setUser, username, faveDrama, email, password, confirmPassword } = useUserStore()
    const [ isMatch, setMatch ] = useState<string>('')
    const [ isVisible, setVisible ] = useState<boolean>(false)
    
    //Handle data for registration of new user
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMatch('Passwords do not match.')
            return
        }

        const userData = {
            username: username,
            faveDrama: faveDrama,
            email: email,
            password: password
        }

        const response = await axios.post('http://localhost:5000/api/user/register', userData)
        console.log(response.data)
    }

    return (
        <div className='py-7 px-6 md:px-12 xl:px-36'>
            <h1 className='text-2xl font-semibold'>Sign up for an account</h1>
            <p>Signing up for an account is free and easy. Fill out the form below to get started.</p>
            <div className='h-full md:h-[600px] flex mt-12 gap-12'>
                <div className='w-96 hidden md:block'>
                    {/**Change this later based on highest rating on Airing kdrama */}
                    <div className='h-full w-full relative'>
                        <Image
                            fill
                            alt='Authentication Image'
                            src={'/authImage.jpg'}
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL='/placeholder.webp'
                        />
                    </div>
                </div>

                {/**User form input */}
                <form action='/register' onSubmit={handleSubmit} className='w-full md:w-[25rem] h-auto  flex flex-col gap-4'>
                    <FormInput>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            value={username}
                            onChange={(e)=> setUser({ username: e.target.value })}
                            type='text'
                        />
                    </FormInput>

                    <FormInput>
                        <Label htmlFor="show">Favorite kdrama</Label>
                        <Input
                            value={faveDrama}
                            onChange={(e)=> setUser({ faveDrama: e.target.value })}
                            type='text'
                        />
                    </FormInput>

                    <FormInput>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            value={email}
                            onChange={(e)=> setUser({ email: e.target.value })}
                            type='email'
                        />
                    </FormInput>

                    <div className='relative'>
                        <FormInput>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                value={password}
                                onChange={(e)=> setUser({ password: e.target.value })}
                                type={`${isVisible ? 'text' : 'password'}`}
                            />
                        </FormInput>
                        <EyeOff className={`${!isVisible ? 'absolute right-3 bottom-2.5' : 'hidden'}`} size={20} onClick={()=> setVisible(!isVisible)} color='gray'/>
                        <Eye className={`${isVisible ? 'absolute right-3 bottom-2.5' : 'hidden'}`} size={20} onClick={()=> setVisible(!isVisible)} color='gray'/>
                    </div>

                    <FormInput>
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                             value={confirmPassword}
                             onChange={(e)=> setUser({ confirmPassword: e.target.value })}
                            type='password'
                        />
                        <p className='text-sm text-red-600'>{isMatch}</p>
                    </FormInput>
                    <div>
                        <p>Already have an account? <span className='text-blue-600'>Login</span> </p>
                        <button type='submit' className='w-full mt-2 rounded-lg text-white font-semibold font-mono bg-blue-600 h-10'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}