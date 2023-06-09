import { AddChannelMember } from '@/components/AddChannelMember'
import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { useAllUsers, useChannel } from '@/state/store'
import { Authenticated } from '@/auth/auth-context'

export default function Id() {
    const channels = useChannel(state => state.channels)
    const users = useAllUsers(state => state.users)
    return (
        <Authenticated>
            <Navbar />
            <SideBar channelList={channels}  userList={users}/>
            <AddChannelMember />
        </Authenticated>
    )
}