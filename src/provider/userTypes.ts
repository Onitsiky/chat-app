export type IUser = {
    id: number
    email: string
    name: string
    googleId: string
    bio: string
    status: number
    createdAt: string
    updatedAt: string
    deletedAt: string
    token: string
}
export type IUserResponse = {
    status: boolean
    user: IUser
}
