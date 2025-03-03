import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialLogoProps {
    alt: string
    src: string
    size?: string
    href: string
}

export default function SocialLogo({ alt, src, size, href }: SocialLogoProps) {
    return (
        <Link href={`${href}`} className={`w-6 h-6 relative rounded-${size} overflow-hidden`}>
            <Image
                fill
                alt={alt}
                src={src}
                loading='lazy'
                placeholder='blur'
                blurDataURL='/placeholder.webp'
            />
        </Link>
    )
}
