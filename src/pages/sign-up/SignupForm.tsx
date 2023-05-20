import { FormGroup } from '@/components/FormGroup'
import { SubmitFormButton } from '@/components/FormButton'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUser, getUserInfo } from '@/provider/User'
import { useUser } from '@/state/store'

export function SignupForm() {
    const schema = yup.object().shape({
        name: yup.string().required('Name is mandatory'),
        email: yup.string().email('Email is invalid').required('Email is mandatory'),
        password: yup.string().required('Must define password').matches(/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z])/,
            'Password must contain at least one alphabetical and one special character ').min(8, 'Password too short'),
        'confirm password': yup.string().required('Must define password').oneOf([yup.ref('password')], 'Passwords don\'t match'),
    })
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
    })
    const updateCurrentUser = useUser((state) => state.setCurrentUser)
    const onSubmit = (data: any) => {
        createUser(data)
        getUserInfo()
            .then((res) => {
                if (res?.user){
                    updateCurrentUser(res?.user)
                }
            })
            .catch((error) => console.error(error.message))
    }
    return (
        <div
            className='w-1/3 mx-auto border-solid border-gray-600 border-2 rounded flex justify-center items-center p-6 my-48'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-5xl text-center p-4'>Sign up</h3>
                <FormGroup label='Name' inputType='text' register={register} errors={errors} />
                <FormGroup label='Email' inputType='email' register={register} errors={errors} />
                <FormGroup label='Password' inputType='password' register={register} errors={errors} />
                <FormGroup label='Confirm password' inputType='password' register={register} errors={errors} />
                <FormGroup label='Bio' inputType='text-area' register={register} errors={errors} />
                <SubmitFormButton label='Sign up' />
                <p>
                    Already have an account ?{' '}
                    <Link href='/login' className='text-blue-700 hover:underline'>Log in here.</Link>
                </p>
            </form>
        </div>
    )
}