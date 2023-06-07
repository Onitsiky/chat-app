import { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'

export function Authenticated(children: any) {
    const router = useRouter();
    useEffect(() => {
        const isTokenValid = () => {
            const token = sessionStorage.getItem("token");
            if(token != null) {
                try {
                    const decoded = jwt.verify(token, '1234');
                    return true;
                }catch (error) {
                    return false;
                }
            }
            return false;
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