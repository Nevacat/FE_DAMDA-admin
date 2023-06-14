import { useForm, FieldValues } from 'react-hook-form';
import React from 'react';
import * as S from '@/styles/pages/login.style';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const submitLogin = (data: FieldValues) => {
    console.log(data);
    router.push('/');
  };

  return (
    <S.LoginPage>
      <S.Logo>
        <Image src="/icons/Yolda_logo.svg" alt="열다" width={147} height={69} />
        <p>관리자 페이지</p>
      </S.Logo>

      <S.Form onSubmit={handleSubmit((data) => submitLogin(data))}>
        <S.Input htmlFor="id" className={errors.id ? 'alert' : ''}>
          <div>
            아이디
            {errors.id && <span>{String(errors.id.message)}</span>}
          </div>
          <input
            id="id"
            type="text"
            placeholder="관리자아이디"
            {...register('id', { required: '아이디를 입력해주세요.' })}
          />
        </S.Input>
        <S.Input htmlFor="password" className={errors.password ? 'alert' : ''}>
          <div>
            비밀번호
            {errors.password && <span>{String(errors.password.message)}</span>}
          </div>
          <input
            id="password"
            type="password"
            placeholder="관리자비밀번호"
            {...register('password', { required: '비밀번호를 입력해주세요.' })}
          />
        </S.Input>

        <S.Button disabled={isSubmitting}>로그인</S.Button>
      </S.Form>
    </S.LoginPage>
  );
}

export default Login;
