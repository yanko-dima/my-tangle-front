'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export const SignInForm = () => {
  const router = useRouter();

  return (
    <form>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};
