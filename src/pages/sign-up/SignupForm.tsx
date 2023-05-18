import { FormGroup } from '@/components/FormGroup'
import { SubmitFormButton } from '@/components/FormButton'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { create, getInfo } from '@/provider/User'
import { useUserStore } from '@/state/store'
import { useEffect } from 'react'

export function SignupForm() {
    const schema = yup.object().shape({
        name: yup.string().required('Name is mandatory'),
        email: yup.string().email('Email is invalid').required('Email is mandatory'),
        password: yup.string().required('Must define password').matches(/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z])/,
            'Password must contain at least one alphabetical and one special character ').min(8, 'Password too short'),
    })
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
    })
    const updateCurrentUser = useUserStore((state) => state.setCurrentUser)
    const onSubmit = (data: any) => {
        create(data)
    }
    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label='Name' inputType='text' register={register} errors={errors} />
                <FormGroup
                    label='Email'
                    inputType='email'
                    register={register}
                    errors={errors} />
                <FormGroup
                    label='Password'
                    inputType='password'
                    register={register}
                    errors={errors} />
                <FormGroup
                    label='Bio'
                    inputType='text-area'
                    register={register}
                    errors={errors} />
                <SubmitFormButton label='Sign up' />
                <p>
                    Already have an account ?{' '}
                    <Link href='/login'>Log in here.</Link>
                </p>
            </form>
        </div>
    )
}