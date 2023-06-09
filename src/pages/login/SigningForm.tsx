import { useForm } from 'react-hook-form'
import { FormGroup } from '@/components/FormGroup'
import { SubmitFormButton } from '@/components/FormButton'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginUser } from '@/provider/User'
import { useChannel, useUser } from '@/state/store'
import { useRouter } from 'next/router'


export function SigningForm() {
    const router = useRouter()
    const schema = yup.object().shape({
        email: yup.string().email('Email is invalid.').required('Email is mandatory.'),
        password: yup.string().required('Please enter your password.'),
    })
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
    })
    const updateCurrentUser = useUser((state) => state.setCurrentUser)
    const updateChannels = useChannel((state) => state.setChannels)
    const onSubmit = (data: any) => {
        const signing = async () => {
            const { user, authenticate } = await loginUser(data)
            if (authenticate && user) {
                updateCurrentUser(user)
            } else {
                console.error('User not authenticated')
            }
        }
        signing()
            .then(r => router.push('/')
            )
            .catch(e => console.error(e))
    }
    return (
        <div
            className='rounded w-1/3 mx-auto border-gray-600 border-2 border-solid flex justify-center items-center p-6 my-48'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-5xl text-center p-4'>Login</h3>
                <FormGroup label='Email' inputType='email' register={register} errors={errors}  name='email' formName='email'/>
                <FormGroup label='Password' inputType='password' register={register} errors={errors} name='password' formName='password'/>
                <SubmitFormButton label='Login' className='loginButton'/>
                <p>
                    Dont have an account ?{' '}
                    <Link href='/sign-up' className='text-blue-700 hover:underline'>Create one here.</Link>
                </p>
            </form>
        </div>
    )
}