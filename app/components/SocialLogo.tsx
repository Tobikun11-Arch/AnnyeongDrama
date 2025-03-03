import Image from 'next/image'
import React from 'react'

interface SocialLogoProps {
    alt: string
    src: string
    size?: string
}

export default function SocialLogo({ alt, src, size }: SocialLogoProps) {
    return (
        <div className={`w-6 h-6 relative rounded-${size} overflow-hidden`}>
            <Image
                fill
                alt={alt}
                src={src}
                loading='lazy'
                placeholder='blur'
                blurDataURL='/placeholder.webp'
            />
        </div>
    )
}
