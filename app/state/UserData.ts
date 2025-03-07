import { create } from 'zustand'
import { IUser } from '../types/userData'

interface DataProps {
    userdata: IUser[]
    setData: (userdata: IUser[]) => void
}

export const useUserData = create<DataProps>((set)=> ({
    userdata: [],
    setData: (userdata: IUser[]) => set({ userdata })
}))