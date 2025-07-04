'use client';

import { useCallback, useEffect, useState } from 'react';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/Spinner';
import Image from 'next/image';
import logo from '@/public/logo.png';
import oAuth from '@/app/_actions/oAuth';
import toast from 'react-hot-toast';
import ForgotForm from './ForgotForm';

function AuthForm() {
  const [variant, setVariant] = useState('LOGIN');
  const [socialLoggingIn, setIsSocialLoggingIn] = useState(false);
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const socialAction = async (action) => {
    const redirectUrl = `${window.location.origin}/auth/callback`;
    const result = await oAuth(action, redirectUrl);
    console.log(result);

    if (result?.error) {
      toast.dismiss();
      toast.error('Error in oAuth login');
    }
  };

  const messages = {
    LOGIN: 'Sign In to your account',
    REGISTER: 'Register new account',
    FORGOT: 'Forgot your password',
  };

  return (
    <div
      className="mb-20 border border-primary-900 max-w-xl
     w-full mx-auto rounded-lg"
    >
      <div className="flex items-center flex-col my-10">
        <Image src={logo} alt="logo" width={100} height={100} />
        <h1 className="text-2xl md:text-3xl mb-10 mt-2">{messages[variant]}</h1>

        <div className="w-full px-6 md:px-16">
          {variant === 'LOGIN' && (
            <LoginForm router={router} socialLoggingIn={socialLoggingIn} />
          )}

          {variant === 'REGISTER' && <RegisterForm />}

          {variant === 'FORGOT' && <ForgotForm />}

          <div className="mt-5">
            <div className="flex items-center justify-center w-full gap-x-2">
              <div className="border-t border-gray-300 flex-grow"></div>
              <h1 className="text-sm text-gray-300">or continue with</h1>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="mt-3 flex gap-2">
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction('google')}
              />
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction('github')}
              />
            </div>
          </div>
        </div>

        <div className="flex mt-5 gap-2 text-md">
          <div>
            {variant === 'LOGIN'
              ? 'New to Chat? - '
              : 'Already have an account - '}
          </div>
          <button className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </button>
        </div>

        <button
          className="cursor-pointer mt-2 p-0.5"
          onClick={() => setVariant('FORGOT')}
        >
          Forgot your Password
        </button>
      </div>
    </div>
  );
}

// export default AuthForm;

export default dynamic(() => Promise.resolve(AuthForm), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <Spinner size={80} />
    </div>
  ),
});
