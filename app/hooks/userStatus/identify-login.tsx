import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userId } from '~/recoils/user-info/atoms';

export const useIdentifyLogin = () => {
  const navigate = useNavigate();
  const [Id, setId] = useRecoilState(userId);
  useEffect(() => {
    if (Id === undefined) {
      setId('notLoggedin');
      navigate('/login');
    }
    return Id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
