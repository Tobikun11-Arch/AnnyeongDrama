import { create } from 'zustand'

interface TabsProps {
    isTab: string
    setTab: (isTab: string) => void
}

export const useTabs = create<TabsProps>((set)=> ({
    isTab: 'Home',
    setTab: (isTab: string) => set({ isTab })
}))