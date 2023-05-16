import { FormGroup, SubmitFormButton } from '@/auth/utils'
import { useForm } from 'react-hook-form'
import { createUser, fetchUser } from '@/provider/userProvider'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


export function SignupForm() {
    const schema = yup.object().shape({
        name: yup.string().required("Name is mandatory"),
        email: yup.string().email("Email is invalid").required("Email is mandatory"),
        password: yup.string().matches(/^[a-z-A-Z\s!]@#\$%\^&*\(\){}\[]]+$/, 'Invalid password').required("Must define password")
    })
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        createUser(data)
        fetchUser()
            .then((res) => localStorage.setItem('user', res.data))
            .catch((e) => console.error(e.message))
    }

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Name" inputType="text" register={register}  errors={errors}/>
                <FormGroup
                    label="Email"
                    inputType="email"
                    register={register}
                 errors={errors}/>
                <FormGroup
                    label="Password"
                    inputType="password"
                    register={register}
                 errors={errors}/>
                <FormGroup
                    label="Bio"
                    inputType="text-area"
                    register={register}
                 errors={errors}/>
                <SubmitFormButton label="Sign up" />
                <p>
                    Already have an account ?{' '}
                    <Link href="/login">Log in here.</Link>
                </p>
            </form>
        </div>
    )
}
