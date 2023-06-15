import { useForm, FieldValues } from 'react-hook-form';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/api/auth';
import useAuthStore from '@/store/auth';
import LoginLayout from '@/components/login/loginLayout';

function Login() {
  const router = useRouter();
  const { isLogin, setLogin } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const submitLogin = async (data: FieldValues) => {
    try {
      await login(data);
      setLogin();
      router.push('/');
    } catch (error) {
      console.log('아이디와 비밀번호를 확인해주세요');
    }
  };

  useEffect(() => {
    if (isLogin) {
      router.back();
    }
  }, []);

  return (
    <LoginLayout
      register={register}
      handleSubmit={handleSubmit}
      submitLogin={submitLogin}
      isSubmitting={isSubmitting}
      errors={errors}
    />
  );
}

export default Login;
