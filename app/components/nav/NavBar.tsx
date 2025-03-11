import React from 'react'
import NavList from './NavList'
import { useTabs } from '@/app/state/DynamicTab'
import { useMenu } from '@/app/state/Menu'

export default function NavBar() {
    const { setTab } = useTabs()
    const { setMenu } = useMenu()

    const handleTabs = (tab: string) => {
        setMenu(false)

        switch (tab) {
            case 'Home':
                setTab("Home")
            break;

            case 'Recommendations':
                setTab("Recommendations")
            break;

            case 'Community':
                setTab("Community")
            break;

            case 'Challenge':
                setTab("Challenge")
            break;
        
            default:
                break;
        }
    }

    return (
        <ul className='text-xl md:text-sm flex flex-col md:flex-row md:gap-10'>
            <div className='md:hidden'>
                <NavList onclick={()=> handleTabs("Home")}>Home</NavList>
            </div>
            <NavList onclick={()=> handleTabs("Recommendations")}>Recommendations</NavList>
            <NavList onclick={()=> handleTabs("Community")}>Community</NavList>
            <NavList onclick={()=> handleTabs("Challenge")}>Weekly Challenge</NavList>
        </ul>
    )
}
