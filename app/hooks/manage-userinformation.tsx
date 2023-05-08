import { useEffect } from 'react';
import type { SetterOrUpdater } from 'recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { myPageId } from '~/data/my-page/mypage-id';
import {
  changedLocalValue,
  localStorageData,
} from '~/data/user/common/login-information';
import { getMyData, getUserData } from '~/data/user/user-data';
import type { ILoginInfo, IUserData, loginType } from '~/models/user/user';

export const useManageUserInformation = (): [
  IUserData,
  ILoginInfo<loginType>,
  SetterOrUpdater<ILoginInfo<loginType>>,
  boolean
] => {
  const [localData, setLocalData] = useRecoilState(localStorageData);
  const [isChanged, setIsChanged] = useRecoilState(changedLocalValue);
  const MyData = useRecoilValue(getMyData);
  const userId = useRecoilValue(myPageId);
  const userData = useRecoilValue(getUserData(userId));
  useEffect(() => {
    if (localData.id === userData.id) {
      if (MyData === false) {
        setLocalData({
          ...localData,
          loginStatus: 'unLogin',
        });
      } else if (isChanged) {
        setIsChanged(false);
      } else {
        setLocalData({
          ...localData,
          id: MyData.id,
          img: MyData.thumbnail,
          name: MyData.nickname,
          job: MyData.job,
          loginStatus: 'login',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (userId === null) {
    return [
      MyData as IUserData,
      localData as ILoginInfo<loginType>,
      setLocalData,
      true,
    ];
  }
  return [
    userData as IUserData,
    localData as ILoginInfo<loginType>,
    setLocalData,
    false,
  ];
};
