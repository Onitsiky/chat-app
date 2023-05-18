import { Channel } from '@/components/Channel'

export function SideBar() {
    return(
        <div className="w-1/6 bg-gray-800 bottom-0 fixed h-128 overflow-scroll">
            <Channel initial='E' name='Exemple'/>
        </div>
    )
}