import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useRecoilValue } from 'recoil';
import { loginInformation } from '~/recoils/user-info/atoms';

export const Loader: LoaderFunction = () => {
  const loginInfo = useRecoilValue(loginInformation);

  if (loginInfo.isloggedin) redirect('/my-page/profile');
  redirect('/');
};
