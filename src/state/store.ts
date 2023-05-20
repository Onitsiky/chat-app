import { create } from 'zustand'
import { ChannelStore, UsersStore, UserStore } from '@/state/Interfaces'

export const useUser = create<UserStore>()((set) => ({
    currentUser: null,
    setCurrentUser: (user) => set((state) => ({
        currentUser: user
    }))
}))

export const useChannel = create<ChannelStore>()((set) => ({
    channels: null,
    setChannels: (toSet) => set(state => ({
        channels: toSet
    }))
}))

export const useAllUsers = create<UsersStore>()((set) => ({
    users: null,
    setUsers: (toSet) => set(state => ({
        users: toSet
    }))
}))