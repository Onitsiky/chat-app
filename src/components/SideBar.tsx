import { Channel } from '@/components/Channel'
import { IChannels } from '@/provider/Types'
import { useState } from 'react'
import { useRouter } from 'next/router'

type ISideBar = {
    channelList: IChannels;
}

export function SideBar({ channelList }: ISideBar) {
    const router = useRouter();
    const handleCreate = () => {
        router.push('/create-channel').then(r => console.log(r));
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
                        <Channel initial={channel.name.charAt(0).toUpperCase()} name={channel.name} key={index} />
                    )
                })}
            </div>
        </div>
    )
}