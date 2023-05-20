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

export type User = {
    id: number
    email: string
    name: string
    bio: string
}

export type IUser = null | {
    status: boolean,
    user: IUserInfo
}

export type IAllUser = null | {
    status: boolean,
    users: User[]
}

export type IMinChannel = null | {
    id: number,
    name: string
}
export type ISignUp = {
    name: string,
    email: string,
    password: string,
    bio: string
}

enum ChannelType {
    'private', 'public'
}

export type IChannel = {
    id: number,
    name: string,
    type: ChannelType,
    createdAt: string,
    updatedAt: string,
    owner: {
        id: number,
        name: string,
        email: string
    }
}

export type IChannels = null|  {
    status: boolean,
    channels: [IChannel]
}
export type createdChannel = null | {
    status: boolean,
    channel: {
        id: number,
        name: string,
        type: string
        ownerId: number,
        updatedAt: string,
        createdAt: string
    }
}