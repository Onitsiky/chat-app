import { useCurrentChannel } from '@/state/store'
import { IChannel } from '@/provider/Types'
import { useRouter } from 'next/router'

type IChannelComponent = {
    channel: IChannel,
    key: any
}

export function Channel({ channel, key }: IChannelComponent) {
    const router = useRouter();
    const updateCurrentChannel = useCurrentChannel(state => state.setCurrentChannel)

    function handleUpdateCurrentChannel(channel: IChannel) {
        updateCurrentChannel(channel)
        console.log(`Current Channel is ${channel.name} with id ${channel.id}`)
        router.push(`/channel/${channel.id}`);
    }

    return (
        <div key={key} className='flex flex-row mt-4 cursor-pointer' onClick={() => handleUpdateCurrentChannel(channel)}>
            <div className='ml-4 text-lg bg-white pr-3 pl-1 my-auto rounded text-center hover:bg-blue-700'>
                {channel.name} #
            </div>
        </div>
    )
}