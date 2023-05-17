import { useForm } from 'react-hook-form'
import { FormGroup } from '@/components/FormGroup'
import { SubmitFormButton } from '@/components/FormButton'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getInfo, login } from '@/provider/User'
import { useUserStore } from '@/state/store'


export function SigningForm() {
    const schema = yup.object().shape({
        email: yup.string().email("Email is invalid.").required("Email is mandatory."),
        password: yup.string().required("Please enter your password.")
    });
    const {handleSubmit, register, formState: {errors}} =  useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });
    const updateCurrentUser = useUserStore((state) => state.setCurrentUser);
    const onSubmit = (data: any) => {
        login(data);
        getInfo()
            .then((res) => updateCurrentUser(res.data.user))
            .catch((error) => console.error(error.message));
    }
    return(
        <div className="signin-container">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <SubmitFormButton label="Sign in" />
                <p>
                    Dont have an account ?{' '}
                    <Link href="/sign-up">Create one here.</Link>
                </p>
            </form>
        </div>
    )
}