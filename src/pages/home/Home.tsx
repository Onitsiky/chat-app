import { Navbar } from '@/components/Navbar'
import { SideBar } from '@/components/SideBar'
import { TypeMessage } from '@/components/TypeMessage'
import { MessageField } from '@/components/MessageField'

export function Home() {
    return(
        <div>
            <Navbar/>
            <SideBar/>
            <MessageField/>
            <TypeMessage/>
        </div>
    )
}