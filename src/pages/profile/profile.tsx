import { useUser } from '@/state/store'
import { useEffect, useState } from 'react'
import { getUserInfo, updateUserInfo } from '@/provider/User'
import { FormGroup } from '@/components/FormGroup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitFormButton } from '@/components/FormButton'
import { useRouter } from 'next/router'

type IProfile = {
    show: boolean,
}
export function Profile() {
    const router = useRouter();
    const updateUser = useUser((state) => state.setCurrentUser);
    const [nameReadOnly, setNameReadOnly] = useState(true);
    const [emailReadOnly, setEmailReadOnly] = useState(true);
    const [bioReadOnly, setBioReadOnly] = useState(true);
    const [passwdReadOnly, setPasswdReadOnly] = useState(true);
    const schema = yup.object().shape({
        name: yup.string(),
        email: yup.string().email(),
        bio: yup.string()
    })
    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    })
    useEffect(() => {
        const getInfo = () => {
            const getUser = async () => {
                const data = await getUserInfo()
                if (data?.user) {
                    updateUser(data?.user)
                } else {
                    throw new Error('Error')
                }
            }
            getUser()
                .then(r => console.log(r))
                .catch(e => console.error(e))
        }
        getInfo()
    }, [])
    const user = useUser(state => state.currentUser);
    const handleNameEdit = () => {
        setNameReadOnly(false);
    }
    const handleEmailEdit = () => {
        setEmailReadOnly(false);
    }
    const handleBioEdit = () => {
        setBioReadOnly(false);
    }
    const handlePasswordEdit = () => {
        setPasswdReadOnly(false);
    }
    const onSubmit = (data: any) => {
        const updateUserInfos = async () => {
            const response = await updateUserInfo(data);
            if (response?.user){
                updateUser(response.user);
                sessionStorage.setItem('token', response.user.token);
                router.push("/")
            } else {
                console.error("Update user info failed");
            }
        }
        updateUserInfos()
            .then(r => console.log(r))
            .catch(e => console.error(e));
    }
    const handleCancel = () => {
        router.push("/").then(r => console.log(r));
    }
    return (
        <div className='flex mx-auto p-2 rounded mt-48 border-2 border-gray-600 w-1/5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className='flex flex-row'>
                    <FormGroup label="Name" inputType="text" register={register} errors={errors} defaultValue={user?.name} readOnly={nameReadOnly} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-6 cursor-pointer hover:text-blue-700" onClick={handleNameEdit}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </div>
                <div className='flex flex-row'>
                    <FormGroup label="Email" inputType="email" register={register} errors={errors} defaultValue={user?.email} readOnly={emailReadOnly} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-6 cursor-pointer hover:text-blue-700" onClick={handleEmailEdit}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </div>
                <div className='flex flex-row'>
                    <FormGroup label="Bio" inputType="text" register={register} errors={errors} defaultValue={user?.bio} readOnly={bioReadOnly} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-6 cursor-pointer hover:text-blue-700" onClick={handleBioEdit}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </div>
                <div className='flex flex-row'>
                    <FormGroup label="OldPassword" inputType="password" register={register} errors={errors} readOnly={passwdReadOnly} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mt-6 cursor-pointer hover:text-blue-700" onClick={handlePasswordEdit}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </div>
                <div className={passwdReadOnly ? 'hidden' : 'flex flex-row'}>
                    <FormGroup label="Password" inputType="password" register={register} errors={errors} readOnly={passwdReadOnly} />
                </div>
                <div className={!passwdReadOnly || !bioReadOnly || !nameReadOnly || !emailReadOnly? 'flex flex-row' : 'hidden'}>
                    <SubmitFormButton label="Save"/>
                </div>
                <button type="button" className="fb-button border-2 border-solid border-gray-400 p-2 rounded-md text-md" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </div>
    )
}