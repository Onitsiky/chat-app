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
export type IUserResponse = null | {
    status: boolean
    user: IUser
}
export interface ISignup {
    name: string,
    email: string,
    password: string,
    bio: string
}