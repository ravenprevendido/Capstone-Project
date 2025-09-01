'use client';

import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(user) {
            router.push('/workspace')
        }
    }, [user])

    return(
        <SignIn/>
    )
}











