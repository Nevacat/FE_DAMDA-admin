import useAuthStore from '@/store/auth';
import { validateToken } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const useAuthValidate = () => {
  const router = useRouter();
  const { setLogin, setLogout } = useAuthStore();
  const { mutate } = useMutation(validateToken, {
    onSuccess: () => {
      setLogin();
    },
    onError: () => {
      setLogout();
      router.push('/login');
    },
  });

  return mutate;
};
