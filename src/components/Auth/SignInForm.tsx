'use client';

import React, { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log('Sign In Response Error Info: ', res);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', gap: '1rem', flexDirection: 'column' }}
    >
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};
