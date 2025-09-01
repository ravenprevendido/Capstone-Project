'use client';

import { SignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(user) {
            router.push('/workspace')
        }
    }, [user])
    return(
        <SignUp />
    )
}






