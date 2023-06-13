import { getToken } from '@/api/auth';
import { handleLogin } from '@/utils/handleLogin';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from '@/styles/pages/login.style';
import { useAuth } from '@/hook/useAuth';

function Login() {
  const router = useRouter();
  const getUserData = useAuth();

  const handleRedirect = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      await getToken(code);
      // getUserData();
      router.push('/');
    } else {
      handleLogin();
    }
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <S.LoginPage>
      <h2>
        3초 후 <br /> 열다 카카오톡 서비스로 이동합니다 :)
      </h2>

      <div className="login_button">
        <p>기다려도 로그인이 되지 않는다면?</p>
        <button className="ir-text" onClick={handleLogin}>
          Kakao 로그인
        </button>
      </div>
    </S.LoginPage>
  );
}

export default Login;
