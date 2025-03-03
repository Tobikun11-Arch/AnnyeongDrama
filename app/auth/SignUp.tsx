import Image from 'next/image'
import React from 'react'
import Input from '../components/common/Input'
import FormInput from '../components/FormInput'

export default function SignUp() {
    
    //Handle data for registration of new user
    function handleSubmit() {
        console.log("submit")
    }

    function handleChange() {
        console.log("typing new data")
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
                <form onSubmit={handleSubmit} action="" className='w-full md:w-[25rem] h-auto  flex flex-col gap-4'>
                    <FormInput>
                        <label htmlFor="username">Username</label>
                        <Input
                            onChange={handleChange}
                            type='text'
                        />
                    </FormInput>

                    <FormInput>
                        <label htmlFor="gender">Gender</label>
                        <Input
                            onChange={handleChange}
                            type='text'
                        />
                    </FormInput>

                    <FormInput>
                        <label htmlFor="email">Email</label>
                        <Input
                            onChange={handleChange}
                            type='text'
                        />
                    </FormInput>

                    <FormInput>
                        <label htmlFor="password">Password</label>
                        <Input
                            onChange={handleChange}
                            type='text'
                        />
                    </FormInput>
                    <div>
                        <p>Already have an account? <span className='text-blue-600'>Login</span> </p>
                        <button className='w-full mt-2 text-white font-semibold font-mono bg-blue-600 h-10'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}