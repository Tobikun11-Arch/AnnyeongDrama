import { create } from 'zustand';

interface UserProps {
    email: string;
    password: string;
    setUser: (user: Partial<UserProps>) => void;
}

export const useUserAcct = create<UserProps>((set) => ({
    email: '',
    password: '',
    
    setUser: (user) => set((state) => ({ ...state, ...user })),
}));
