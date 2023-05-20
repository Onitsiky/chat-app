type IChannel = {
    initial: string,
    name: string,
    key: any
}
export function Channel({initial, name, key}: IChannel) {
    return(
        <div key={key} className='flex flex-row mt-10'>
            <div className='ml-4 text-lg bg-white pr-3 pl-1 my-auto rounded text-center'>
                {name} #
            </div>
        </div>
    )
}