export function TypeMessage() {
    return(
        <div className='bottom-0 right-0 absolute mb-3 w-5/6'>
            <div className='p-3 border-solid border-2 rounded mr-8 cursor-pointer float-right'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </div>
            <div className='border-solid border-2 rounded mx-8 w-3/4 fixed'>
                <input type='text' className='w-full h-16' placeholder='  Type message...'/>
            </div>
        </div>
    )
}