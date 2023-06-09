import { Authenticated } from '@/auth/auth-context'
import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { useAllUsers, useChannel } from '@/state/store'
import { MessageField } from '@/components/MessageField'
import { TypeMessage } from '@/components/TypeMessage'

export default function Id() {
    const channels = useChannel(state => state.channels);
    const users = useAllUsers(state => state.users)
    return(
        <Authenticated>
            <Navbar/>
            <SideBar channelList={channels} userList={users}/>
            <MessageField/>
            <TypeMessage/>
        </Authenticated>
    )
}