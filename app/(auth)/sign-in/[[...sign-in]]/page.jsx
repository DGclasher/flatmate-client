import React from 'react'
import { SignIn } from '@clerk/nextjs'

const signIn = () => {
  return (
    <div>
      Sign in page
        <SignIn />
    </div>
  )
}

export default signIn
