import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userId } from '~/recoils/user-info/atoms';

export const IdentifyLogin = () => {
  const navigate = useNavigate();
  const Id = useRecoilValue(userId);

  useEffect(() => {
    if (Id === undefined) {
      navigate('/login');
    }
    return Id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
