'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button onClick={() => signIn('google', { callbackUrl })}>
      Sing in with Google
    </button>
  );
};
