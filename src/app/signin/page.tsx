import { GoogleButton } from '@/components/Auth/GoogleAuthButton';
import { SignInForm } from '@/components/Auth/SignInForm';

export default function Signin() {
  return (
    <>
      <div>
        <h1>SignIn</h1>
        <GoogleButton />
        <div>or</div>
        <SignInForm />
      </div>
    </>
  );
}
