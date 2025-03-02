import { create } from 'zustand'

interface authProps {
    isLoggedIn: boolean
    setLoggedIn: (isLoggedIn: boolean) => void
}

export const userLoggedIn = create<authProps>((set)=> ({
    isLoggedIn: false,
    setLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn })
}))