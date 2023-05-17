export type IUserInfo = {
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

export type IUser = null | {
    status: boolean,
    user: IUserInfo
}

export type ISignUp = {
    name: string,
    email: string,
    password: string,
    bio: string
}