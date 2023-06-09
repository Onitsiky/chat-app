import { useCreateMessage, useCurrentChannel, useCurrentFriend } from '@/state/store'
import { sendMessage } from '@/provider/Message'
import { FormEvent } from 'react'

export function TypeMessage() {
    const { message ,setMessage } = useCreateMessage()
    const currentFriend = useCurrentFriend(state => state.currentFriend);
    const currentChannel = useCurrentChannel(state => state.currentChannel);
    const handleOnChange = (e: any) => {
        setMessage(e.target.value)
    }
    const sendWrittenMessage = (e: any) => {
        e.preventDefault();
        let messageData : any = null;
        if (currentChannel != null){
            messageData = {
                "channelId": currentChannel.id,
                "recipientId": null,
                "content": message
            }
        }
        else {
            messageData = {
                "channelId": null,
                "recipientId": currentFriend?.id,
                "content": message
            }
        }
        if (message != null && message != ""){
            const send = async () => {
                const response = await sendMessage(messageData);
            }
            send()
                .then(r => console.log("Message sent"))
                .catch(e => console.error(e))
        }

    }
    return (
        <form className='bottom-0 right-0 absolute mb-3 w-5/6' onSubmit={(e) => {
            sendWrittenMessage(e);
        }} >
            <div className='p-3 border-solid border-2 rounded mr-8 cursor-pointer float-right' onClick={(e) => {
                sendWrittenMessage(e);
            }}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                     stroke='currentColor' className='w-10 h-10'>
                    <path strokeLinecap='round' strokeLinejoin='round'
                          d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
                </svg>
            </div>
            <div className='border-solid border-2 rounded mx-8 w-3/4 fixed'>
                <input type='text' className='w-full h-16 p-3' placeholder='Type message...'
                       onChange={(e) => handleOnChange(e)} />
            </div>
        </form>
    )
}