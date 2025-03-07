import { create } from 'zustand'

interface LoadingProps {
    isLoading: boolean
    setLoading: (isLoading: boolean) => void
}

export const useLoading = create<LoadingProps>((set)=> ({
    isLoading: false,
    setLoading: (isLoading: boolean) => set({ isLoading })
}))