"use client";

import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { register } from '../../lib/action';
import styles from './registerForm.module.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {

  const router = useRouter()
  const [state, formAction] = useFormState(register, undefined)

  useEffect(() => {
    if(state?.success) {
    return router.push('/login');
    }
  }, [state?.success, router])


  return (
        <form action={formAction} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input type="password" placeholder="password again" name="passwordRepeat" />
          <button>Register</button>
          {state?.error}
          <Link href="login">
          Have an account? <b>Login</b>
          </Link>
        </form>
  )
}

export default RegisterForm