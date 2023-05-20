import { useAllUsers, useMinChannel } from '@/state/store'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { getAllUsers } from '@/provider/User'
import { SubmitFormButton } from '@/components/FormButton'
import { addMemberToChannel } from '@/provider/Channel'
import { useRouter } from 'next/router'

type IData = {
    id: number,
    name: string
}

export function AddChannelMember() {
    const router = useRouter();
    const [selectedUsers, setSelectedUsers] = useState<IData[]>([])
    const updateAllUsers = useAllUsers(state => state.setUsers)
    const channelId = useMinChannel(state => state.channelId);
    const channelName = useMinChannel(state => state.channelName);
    const [datas, setDatas] = useState<number[]>([]);
    useEffect(() => {
        const getAllUser = () => {
            const getUsers = async () => {
                const response = await getAllUsers()
                updateAllUsers(response)
            }
            getUsers()
                .then(r => console.log(r))
                .catch(e => console.error(e))
        }
        getAllUser()
    }, [])
    const handleCancel = () => {
        router.push('/').then(r => console.log(r))
    }
    const handleSelect = (data: IData) => {
        const existings = selectedUsers.some((item) => item.id===data.id);
        if (!existings){
            setSelectedUsers([...selectedUsers, data]);
            setDatas([...datas, data.id]);
        }
    }
    const handleUnselect = (itemToRemove: any) => {
        setSelectedUsers((prevItem) => prevItem.filter((item) => item.name != itemToRemove))
    }
    const usersList = useAllUsers(state => state.users)
    const { handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (e: any) => {
        e.preventDefault();
        const saveMembers = async () => {
            await addMemberToChannel(channelId, {"members": datas});
        }
        saveMembers()
            .then(r => {
                router.push("/")
            })
            .catch(e => console.error(e));
    }
    return (
        <div className='flex mx-auto p-2 rounded mt-48 border-2 border-gray-600 w-1/5 relative'>
            <form onSubmit={onSubmit}>
                <div className='flex flex-row mb-5'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                         stroke='currentColor' className='w-6 h-6 mr-4'>
                        <path strokeLinecap='round' strokeLinejoin='round'
                              d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155' />
                    </svg>
                    Add new members in {channelName}
                    <div className='ml-16 hover:text-red-900 cursor-pointer'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                             stroke='currentColor' className='w-6 h-6' onClick={handleCancel}>
                            <path strokeLinecap='round' strokeLinejoin='round'
                                  d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                </div>
                <div className='form-select-container p-1'>
                    <label className='fg-label'>Members: </label><br />
                    <select className='border-solid border-2 border-gray-600 rounded-md p-1 w-full'>
                        {usersList?.users.map((item) => (
                            <option key={item.id} value={item.id}
                                    onClick={() => handleSelect({ id: item.id, name: item.name })}
                            >{item.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {selectedUsers.map((user, index) => (
                        <div key={index} className='flex flex-row'>
                            <input type='checkbox' checked={true} />
                            <span className='ml-3'>{user.name}</span>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                                 stroke='currentColor'
                                 className='w-6 h-6 right-0 absolute hover:text-red-900 cursor-pointer'
                                 onClick={() => handleUnselect(user.name)}
                            >
                                <path strokeLinecap='round' strokeLinejoin='round'
                                      d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    ))}
                </div>
                <SubmitFormButton label="Add"/>
            </form>
        </div>
    )
}