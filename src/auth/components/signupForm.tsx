import {FormGroup, SubmitFormButton} from "@/auth/utils";
import {useForm} from "react-hook-form";
import {createUser} from "@/provider/userProvider";
import Link from "next/link";

export function SignupForm(){
    const {handleSubmit, register,formState: {errors}} = useForm();
    const onSubmit = (data:any) =>{
        createUser(data);
    }

    return(
        <div className="signup-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Name" inputType="text" register={register}/>
                <FormGroup label="Email" inputType="email" register={register}/>
                <FormGroup label="Password" inputType="password" register={register}/>
                <FormGroup label="Bio" inputType="text-area" register={register}/>
                <SubmitFormButton label="Sign up"/>
                <p>Already have an account ? <Link href="/login">Log in here.</Link></p>
            </form>
        </div>
    )
}