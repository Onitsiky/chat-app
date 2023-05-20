import { FormGroup } from '@/components/FormGroup'
import { useForm } from 'react-hook-form'
import { FormSelect } from '@/components/FormSelect'
import { useAllUsers } from '@/state/store'
import { useEffect } from 'react'
import { getAllUsers } from '@/provider/User'
import { SubmitFormButton } from '@/components/FormButton'
import { createChannel } from '@/provider/Channel'
import { useRouter } from 'next/router'

export function ChannelForm() {
    const router = useRouter()
    const { handleSubmit, register, formState: { errors } } = useForm()
    const updateAllUsers = useAllUsers(state => state.setUsers)
    const usersList = useAllUsers(state => state.users)
    const options = ['public', 'private']
    const handleCancel = () => {
        router.push('/').then(r => console.log(r))
    }
    const onSubmit = (data: any) => {
        const saveChannel = async () => {
            const response = await createChannel(data)
        }
        saveChannel()
            .then(r => console.log(r))
            .catch(e => console.error(e))
    }
    useEffect(() => {
        const getAllUser = () => {
            const getUsers = async () => {
                const response = await getAllUsers()
                updateAllUsers(response)
            }
            getUsers()
                .then(r => router.push("/"))
                .catch(e => console.error(e))
        }
        getAllUser()
    }, [])
    return (
        <div className='flex mx-auto p-2 rounded mt-48 border-2 border-gray-600 w-1/5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-row mb-5'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                         stroke='currentColor' className='w-6 h-6 mr-4'>
                        <path strokeLinecap='round' strokeLinejoin='round'
                              d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155' />
                    </svg>
                    Create new Channel
                    <div className='ml-16 hover:text-red-900 cursor-pointer' onClick={handleCancel}>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                             stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round'
                                  d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                </div>
                <FormGroup label='Name' inputType='text' register={register} errors={errors} />
                <div className='form-select-container p-1'>
                    <label className='fg-label'>Type:</label><br />
                    <select
                        className='border-solid border-2 border-gray-600 rounded-md p-1 w-full'
                        {...register('type')}>
                        {options.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <FormSelect label='Members' register={register} options={usersList} />
                <div className='flex flex-row ml-3 '>
                    <SubmitFormButton label='Create' />
                    <div className='form-button-container pt-3 pb-3 ml-3'>
                        <button type='button' className=' border-2 border-solid border-gray-400 p-2 rounded-md text-md'
                                onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}