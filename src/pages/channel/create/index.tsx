import { CreateChannel } from '@/pages/channel/create/CreateChannel'
import { Authenticated } from '@/auth/auth-context'

export default function CreateChannelForm() {
    return(
        <Authenticated>
            <CreateChannel/>
        </Authenticated>
    )
}