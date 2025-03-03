import React from 'react'
import SocialLogo from '../components/SocialLogo'
import LinkList from '../components/LinkList'

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white w-full flex justify-center items-center'>
            <div className='p-4'>
                <div className='flex flex-col sm:flex-row sm:gap-48 items-center'>
                    <div>
                        <div className='w-36 h-1 bg-white'></div>
                        <h1 className='text-3xl font-semibold font-mono'>Annyeong <br className='hidden sm:block'/> Drama</h1>
                    </div>

                    <div className='flex gap-6 items-center mt-4 sm:mt-0'>
                        <div className='flex flex-col'>
                            <LinkList href=''>About us</LinkList>
                            <LinkList href=''>Feedback</LinkList>
                            <LinkList href=''>Help & Support</LinkList>
                        </div>
                        <div className='flex flex-col'>
                            <LinkList href=''>Privacy Policy</LinkList>
                            <LinkList href=''>Terms of Service</LinkList>
                            <LinkList href=''>Copyright policy</LinkList>
                        </div>
                    </div>
                </div>

                <div className='mt-10'> 
                    <div className='flex gap-4 items-center'>
                        <h1 className='font-semibold'>Follow us </h1>
                        <div className='flex gap-2 items-center'>
                            <SocialLogo src='/GithubLogo.png' alt='Github logo' size='full'/>
                            <SocialLogo src='/FacebookLogo.png' alt='Facebook logo'size='full'/>
                            <SocialLogo src='/LinkedInLogo.png' alt='LinkedIn logo'/>
                            <SocialLogo src='/InstagramLogo.png' alt='Instagram logo' size='lg'/>
                        </div>
                    </div>
                    <hr className='mt-3'/>
                    <p className='text-gray-300 text-end text-sm font-medium'>© 2025 All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
