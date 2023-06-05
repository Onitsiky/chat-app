import { useCurrentChannel } from '@/state/store'
import { IChannel } from '@/provider/Types'

type IChannelComponent = {
    channel: IChannel,
    key: any
}

export function Channel({ channel, key }: IChannelComponent) {
    const updateCurrentChannel = useCurrentChannel(state => state.setCurrentChannel)

    function handleUpdateCurrentChannel(channel: IChannel) {
        updateCurrentChannel(channel)
        console.log(`Current Channel is ${channel.name} with id ${channel.id}`)
    }

    return (
        <div key={key} className='flex flex-row mt-10 cursor-pointer' onClick={() => handleUpdateCurrentChannel(channel)}>
            <div className='ml-4 text-lg bg-white pr-3 pl-1 my-auto rounded text-center hover:bg-blue-700'>
                {channel.name} #
            </div>
        </div>
    )
}