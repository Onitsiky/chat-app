import { Channel } from '@/components/Channel'
import { IChannels } from '@/provider/Types'

type ISideBar = {
    channelList: IChannels;
}

export function SideBar({ channelList }: ISideBar) {
    return (
        <div className='w-1/6 bg-gray-800 bottom-0 fixed h-128 overflow-scroll'>
            {channelList?.channels.map((channel, index) => {
                return (
                    <Channel initial={channel.name.charAt(0).toUpperCase()} name={channel.name} key={index} />
                )
            })}
        </div>
    )
}