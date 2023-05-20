import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { localUserData } from '~/data/my-page/user-data';
import { userId } from '~/data/my-page/user-id';
import { localStorageData } from '~/data/user/common/login-information';
import type { IFollow } from '~/hooks/useconvert-nickname-to-user-data';
import { useConvertNickNameToUserData } from '~/hooks/useconvert-nickname-to-user-data';

export function useCustomHook(nickName: string): [boolean, IFollow] {
  const [localData, setLocalData] = useRecoilState(localStorageData);
  const setUserData = useSetRecoilState(localUserData);
  const [isMe, setIsMe] = useState(false);
  const [follow, setFollow] = useState<IFollow>();
  const setUserId = useSetRecoilState(userId);
  useEffect(() => {
    async function FetchAndSetUser() {
      const returnedValue = await useConvertNickNameToUserData(nickName);
      const [userData, tempFollowValue, id] = returnedValue;
      setUserId(id);
      setFollow(tempFollowValue);
      setUserData(userData);
      if (localData.id === userData.id) {
        /** 마이페이지 수정하기에서 값이 바뀐 경우, 거기서 이미 내 정보를 수정했으니 아무것도 안한다. */
        /* if (isChanged) {
            setIsChanged(false);
          } else { */
        /** 새 정보를 받아오고, 이게 본인인경우, localData를 업데이트 시킨다. localUserData도 업데이트 시켜 값을 다시 받는것을 방지한다. */
        setIsMe(true);
        setLocalData({
          ...localData,
          id: userData.id,
          img: userData.thumbnail,
          name: userData.nickname,
          job: userData.job,
          loginStatus: 'login',
        });
      }
    }
    FetchAndSetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nickName]);
  return [isMe, follow as IFollow];
}
