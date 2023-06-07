import { Profile } from '@/pages/profile/profile'
import { useAllUsers, useChannel, useUser } from '@/state/store'
import { useEffect } from 'react'
import { getChannels } from '@/provider/Channel'
import { getUserInfo } from '@/provider/User'
import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { Authenticated } from '@/auth/auth-context'

export default function Home() {
    const updateUser = useUser((state) => state.setCurrentUser)
    const updateChannels = useChannel((state) => state.setChannels)
    const channels = useChannel((state) => state.channels)
    const allUsers = useAllUsers(state => state.users);
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
        <Authenticated>
            <Navbar/>
            <SideBar channelList={channels} />
            <Profile />
        </Authenticated>
    )
}
