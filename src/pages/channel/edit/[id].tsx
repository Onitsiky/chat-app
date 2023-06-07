import { AddChannelMember } from '@/components/AddChannelMember'
import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { useChannel } from '@/state/store'
import { Authenticated } from '@/auth/auth-context'

export default function Id() {
    const channels = useChannel(state => state.channels)

    return (
        <Authenticated>
            <Navbar />
            <SideBar channelList={channels} />
            <AddChannelMember />
        </Authenticated>
    )
}