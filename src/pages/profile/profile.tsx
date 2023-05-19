import { useUser } from '@/state/store'
import { useEffect } from 'react'
import { getUserInfo } from '@/provider/User'

export function Profile() {
    const user = useUser((state) => state.currentUser)
    const updateCurrentUser = useUser((state) => state.setCurrentUser)
    // useEffect(() => {
    //     getUserInfo()
    //         .then((res) => updateCurrentUser(res.data))
    //         .catch((error) => console.error(error.message))
    // }, [user, updateCurrentUser])
    return (
        <div>
            <div className='flex flex-row absolute w-1/4 border-solid border-amber-950 border-2 '>
                <div className='float-left'>
                    Name
                </div>
                <div className='float-right'>
                    <input value={user?.user.name}/>
                </div>
            </div>
        </div>
    )
}