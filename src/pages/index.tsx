import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { useAllUsers, useChannel, useCurrentChannel, useCurrentFriend, useUser } from '@/state/store'
import { useEffect } from 'react'
import { getChannels } from '@/provider/Channel'
import { getAllUsers, getUserInfo } from '@/provider/User'
import { Authenticated } from '@/auth/auth-context'
export default function Home() {
    const updateUser = useUser((state) => state.setCurrentUser)
    const { channels, setChannels } = useChannel()
    const { currentChannel, setCurrentChannel } = useCurrentChannel()
    const { users, setUsers } = useAllUsers();
    const updateCurrentFriend = useCurrentFriend(state => state.setCurrentFriend);
    useEffect(() => {
        const getUsers = async () => {
            const response = await getAllUsers();
            setUsers(response);
            if (response != null) {
                updateCurrentFriend(response.users[0])
            }
        }
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
            getUsers()
                .then(r => console.log("Get all users ok"))
                .catch(e => console.error(e))
        }
        getInfo()
    }, [])
    return(
        <Authenticated>
            <Navbar/>
            <SideBar channelList={channels} userList={users}/>
        </Authenticated>
    )
}
