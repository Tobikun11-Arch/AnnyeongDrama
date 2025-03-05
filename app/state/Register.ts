import { create } from 'zustand';

interface UserProps {
    username: string;
    faveDrama: string;
    email: string;
    password: string;
    confirmPassword: string
    setUser: (user: Partial<UserProps>) => void;
}

export const useUserStore = create<UserProps>((set) => ({
    username: '',
    faveDrama: '',
    email: '',
    password: '',
    confirmPassword: '',
    
    setUser: (user) => set((state) => ({ ...state, ...user })),
}));
