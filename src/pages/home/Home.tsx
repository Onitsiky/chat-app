import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { TypeMessage } from '@/components/TypeMessage'
import { MessageField } from '@/components/MessageField'
import { useChannel, useUser } from '@/state/store'
import { getUserInfo } from '@/provider/User'
import { getChannels } from '@/provider/Channel'
import { useEffect } from 'react'

export function Home() {
    const updateUser = useUser((state) => state.setCurrentUser)
    const updateChannels = useChannel((state) => state.setChannels)
    const channels = useChannel((state) => state.channels)
    useEffect(() => {
        const getInfo = () => {
            const getAllChannels = async () => {
                const channels = await getChannels()
                updateChannels(channels)
            }
            const getUser = async () => {
                const user = await getUserInfo()
                if (user?.user) {
                    updateUser(user?.user)
                }
            }
            getAllChannels()
                .then(r => console.log(r))
                .catch(e => console.error(e))
            getUser()
                .then(r => console.log(r))
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