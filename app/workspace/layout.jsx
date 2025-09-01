'use client';

import React from 'react'
import WorkspaceProvider from './provider'
import { RedirectToSignIn, SignedOut, SignIn } from '@clerk/nextjs';

function WorkspaceLayout({children}) {
  return (
    // <>
    //  <SignIn>
    <WorkspaceProvider>
        {children}
    </WorkspaceProvider>
    // </SignIn>
    //  <SignedOut>
    //     <RedirectToSignIn />
    //   </SignedOut>
  // </>
  )
}

export default WorkspaceLayout

