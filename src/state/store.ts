import { create } from 'zustand'
import { UserStore } from '@/state/Interfaces'

export const useUserStore = create<UserStore>()((set) => ({
    currentUser: null,
    setCurrentUser: (user) => set((state) => ({
        currentUser: user
    }))
}))