type IChannel = {
    initial: string,
    name: string
}
export function Channel({initial, name}: IChannel) {
    return(
        <div className='flex flex-row mt-10'>
            <div className="bg-white ml-4 text-3xl text-center w-12 h-12 rounded-full">
                {initial}
            </div>
            <div className='ml-4 text-3xl bg-white pr-3 pl-1 h-12 rounded text-center'>
                {name}
            </div>
        </div>
    )
}