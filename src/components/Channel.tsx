type IChannel = {
    initial: string,
    name: string,
    key: any
}
export function Channel({initial, name, key}: IChannel) {
    return(
        <div key={key} className='flex flex-row mt-10'>
            <div className="bg-white ml-4 text-2xl text-center w-10 h-10 rounded-full">
                {initial}
            </div>
            <div className='ml-4 text-2xl bg-white pr-3 pl-1 h-10 rounded text-center'>
                {name}
            </div>
        </div>
    )
}