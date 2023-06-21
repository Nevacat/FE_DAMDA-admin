import useAuthStore from '@/store/auth';
import { validateToken } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const useAuthValidate = () => {
  const router = useRouter();
  const { setLogin, setLogout } = useAuthStore();
  const { mutate } = useMutation(validateToken, {
    onSuccess: () => {
      console.log('로그인이 확인되었습니다');
      setLogin();
    },
    onError: () => {
      setLogout();
      router.push('/login');
    },
  });

  return mutate;
};
