import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { TypeMessage } from '@/components/TypeMessage'
import { MessageField } from '@/components/MessageField'
import { useChannel, useCurrentChannel, useUser } from '@/state/store'
import { getUserInfo } from '@/provider/User'
import { getChannels } from '@/provider/Channel'
import { useEffect } from 'react'

export function Home() {
    const updateUser = useUser((state) => state.setCurrentUser)
    const { channels, setChannels } = useChannel()
    const { currentChannel, setCurrentChannel } = useCurrentChannel()
    useEffect(() => {
        const getInfo = () => {
            const getAllChannels = async () => {
                const channels = await getChannels()
                setChannels(channels)
                if (channels != null) {
                    setCurrentChannel(channels.channels[0])
                    console.log(currentChannel?.name);
                }
            }
            const getUser = async () => {
                const user = await getUserInfo()
                if (user?.user) {
                    updateUser(user?.user)
                }
            }
            getAllChannels()
                .then(r => console.log("All channels ok"))
                .catch(e => console.error(e))
            getUser()
                .then(r => console.log("Get user ok"))
                .catch(e => console.error(e))
        }
        getInfo()
    }, [])
    return (
        <div>
            <Navbar />
            <SideBar channelList={channels} />
            <MessageField />
            <TypeMessage />
        </div>
    )
}