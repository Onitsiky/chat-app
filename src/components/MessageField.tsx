import { useChannelMessage, useCurrentChannel, useCurrentFriend } from '@/state/store'
import { useEffect } from 'react'
import { getMessageByChannel, getMessageByUser } from '@/provider/Message'

export function MessageField() {
    const { messages, setMessages } = useChannelMessage();
    const currentChannel = useCurrentChannel(state => state.currentChannel);
    const currentFriend = useCurrentFriend(state => state.currentFriend);
    useEffect(() => {
        const getAllMessages = () => {
            const getChannelsMessages = async () => {
                const responses = await getMessageByChannel(currentChannel?.id);
                if(responses) {
                    setMessages(responses);
                }
            }
            const getUserMessages = async () => {
                const response = await getMessageByUser(currentFriend?.id);
                if (response) {
                    setMessages(response);
                }
            }
            if (currentChannel != null) {
                getChannelsMessages()
                    .then(r => console.log("Get all messages ok"))
                    .catch(e => console.error(e.message));
            } else {
                getUserMessages()
                    .then(r => console.log(r))
                    .catch(e => console.error(e));
            }
        }
        getAllMessages();
    }, [currentChannel, currentFriend])
    return (
        <div className='fixed right-0 w-4/5 border-2 border-gray-300 h-126 top-16 mr-8 rounded overflow-scroll'>
                {messages?.messages && messages.messages.map((mess, index) => (
                    <div key={index}>{mess?.sender.name} : {mess?.content}</div>
                ))}
        </div>
    )
}