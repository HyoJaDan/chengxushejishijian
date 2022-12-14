import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { loginInformation } from '~/recoils/user-info/atoms';

export default function Mypage() {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginInformation);
  useEffect(() => {
    if (loginInfo.isloggedin) navigate('/my-page/profile');
    navigate('/');
  }, []);
}
