import { IUser } from '@/provider/Types'

export interface UserStore {
    currentUser: IUser,
    setCurrentUser: (user: IUser) => void
}