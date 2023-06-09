import { ChannelForm } from '@/components/ChannelForm'
import { useAllUsers, useChannel, useCurrentFriend, useUser } from '@/state/store'
import { useEffect } from 'react'
import { getChannels } from '@/provider/Channel'
import { getAllUsers, getUserInfo } from '@/provider/User'
import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'

export function CreateChannel() {
    const updateUser = useUser((state) => state.setCurrentUser)
    const updateChannels = useChannel((state) => state.setChannels)
    const channels = useChannel((state) => state.channels)
    const {users, setUsers} = useAllUsers()
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
                updateChannels(channels)
            }
            const getUser = async () => {
                const user = await getUserInfo()
                if (user?.user) {
                    updateUser(user?.user)
                }
            }
            getUsers()
                .then(r => console.log(r))
                .catch(e => console.error(e))
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
            <SideBar channelList={channels}  userList={users}/>
            <ChannelForm />
        </div>
    )
}