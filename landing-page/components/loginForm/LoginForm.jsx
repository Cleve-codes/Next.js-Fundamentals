"use client";

import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { login } from '../../lib/action';
import styles from './login.module.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {

  const router = useRouter()
  const [state, formAction] = useFormState(login, undefined)

  useEffect(() => {
    if(state?.success) {
    return router.push('/about');
    }
  }, [state?.success, router])


  return (
        <form action={formAction} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {state?.error}
          <Link href="/register">
          {"Don't have an account?"}<b>Register</b>
          </Link>
        </form>
  )
}

export default LoginForm