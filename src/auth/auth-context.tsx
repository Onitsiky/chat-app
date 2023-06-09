import { PropsWithChildren, ReactNode, useEffect } from 'react'
import {verify, } from 'jsonwebtoken'
import { useRouter } from 'next/router'

export function Authenticated({ children }: PropsWithChildren) {
    const router = useRouter();
    useEffect(() => {
        const isTokenValid = () => {
            return sessionStorage.getItem("token") != null;
        }
        if (!isTokenValid()) {
            router.replace("/login")
                .then(r => console.log("Not authenticated"))
                .catch(e => console.log("error"));
        }
    }, [])
    return(
        <div>
            {children}
        </div>
    )
}