import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { useChannel, useCurrentChannel, useUser } from '@/state/store'
import { useEffect } from 'react'
import { getChannels } from '@/provider/Channel'
import { getUserInfo } from '@/provider/User'
export default function Home() {
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
    return(
        <>
            <Navbar/>
            <SideBar channelList={channels}/>
        </>
    )
}
