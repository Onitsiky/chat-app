import { AddChannelMember } from '@/components/AddChannelMember'
import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { useChannel } from '@/state/store'

export default function Id() {
    const channels = useChannel(state => state.channels)

    return (
        <>
            <Navbar />
            <SideBar channelList={channels} />
            <AddChannelMember />
        </>
    )
}