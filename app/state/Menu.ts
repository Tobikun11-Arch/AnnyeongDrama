import { create } from 'zustand'

interface MenuProps {
    isMenu: boolean
    setMenu: (isMenu: boolean) => void
}

export const useMenu = create<MenuProps>((set)=> ({
    isMenu: false,
    setMenu: (isMenu: boolean) => set({ isMenu })
}))