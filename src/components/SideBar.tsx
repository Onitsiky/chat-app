import { Channel } from '@/components/Channel'
import { IChannels } from '@/provider/Types'
import { useRouter } from 'next/router'
import { useMinChannel } from '@/state/store'

type ISideBar = {
    channelList: IChannels;
}

export function SideBar({ channelList }: ISideBar) {
    const router = useRouter()
    const setChannelId = useMinChannel(state => state.setChannelId)
    const setChannelName = useMinChannel(state => state.setChannelName)
    const handleCreate = () => {
        router.push('/channel/create').then(r => console.log(r))
    }
    const handleEditChannel = (channelId: number, channelName: string) => {
        setChannelId(channelId)
        setChannelName(channelName)
        router.push(`/channel/edit/${channelId}`).then(r => console.log(r))
    }
    return (
        <div className='w-1/6 bg-gray-800 bottom-0 fixed h-128 overflow-scroll flex flex-col'>
            <div
                className='ml-10 mt-4 text-white text-lg border-white border-2 mr-4 p-2 rounded flex flex-row cursor-pointer hover:text-blue-700 hover:border-blue-700'
                onClick={handleCreate}>
                Create Channel
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                     stroke='currentColor' className='w-5 h-5 mt-1 ml-2'>
                    <path strokeLinecap='round' strokeLinejoin='round'
                          d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                </svg>
            </div>
            <div>
                {channelList?.channels.map((channel, index) => {
                    return (
                        <div key={index} className='flex flex-row relative'>
                            <Channel channel={channel} key={index} />
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                                 stroke='currentColor'
                                 className='w-9 h-9 text-white absolute right-16 mt-8 hover:text-blue-700 ml-1 cursor-pointer'>
                                <path strokeLinecap='round' strokeLinejoin='round'
                                      d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
                            </svg>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                                 stroke='currentColor'
                                 className='w-9 h-9 text-white right-2 absolute mt-8 hover:text-blue-700 ml-1 cursor-pointer'
                                 onClick={() => handleEditChannel(channel.id, channel.name)}>
                                <path strokeLinecap='round' strokeLinejoin='round'
                                      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                            </svg>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}