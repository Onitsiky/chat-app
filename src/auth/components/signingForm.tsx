import { FormGroup, SubmitFormButton } from '@/auth/utils'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { loginUser } from '@/provider/userProvider'

export function SigningForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()
    const onSubmit = (data: any) => {
        loginUser(data)
    }
    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup
                    label="Email"
                    inputType="email"
                    register={register}
                />
                <FormGroup
                    label="Password"
                    inputType="password"
                    register={register}
                />
                <SubmitFormButton label="Sign in" />
                <p>
                    Dont have an account ?{' '}
                    <Link href="/signup">Create one here.</Link>
                </p>
            </form>
        </div>
    )
}
