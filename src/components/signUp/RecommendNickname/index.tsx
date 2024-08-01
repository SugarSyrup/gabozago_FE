import { useState } from 'react';

import InputContainer from '../../common/InputContainer';
import { get } from '@_utils/api';

import * as S from './style';

interface Props {
  setIsRecommendarOk: React.Dispatch<React.SetStateAction<number>>;
}

function RecommendNickname({ setIsRecommendarOk }: Props) {
  const [recommend, setRecommend] = useState('');
  const [recommendAlert, setRecommendAlert] = useState('');

  return (
    <InputContainer
      inputType="text"
      name="reccomendName"
      label={
        <>
          추천받고 오셨다면 알려주세요!
          <S.InputExplain>(선택)</S.InputExplain>
        </>
      }
      disabled={false}
      required={false}
      minLength={2}
      maxLength={15}
      pattern="^(?=.*[a-z0-9가-힣])[a-z0-9가-힣_.]{2,16}$"
      placeholder="추천인 닉네임 입력"
      alert={
        <S.AlertMessage color={recommendAlert.length > 13 ? 'red' : 'blue'}>
          {recommendAlert}
        </S.AlertMessage>
      }
      onInput={(e) => {
        setRecommend(e.currentTarget.value);
        setRecommendAlert('');
      }}
      onButtonClick={() => {
        const access = localStorage.getItem('access_token');
        const refresh = localStorage.getItem('refresh_token');

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        get<{
          id: number;
        }>(`/user/sign-in/recommender/${recommend}`)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              setRecommendAlert('확인되었습니다.');
              setIsRecommendarOk(res.data.id);
            }
          })
          .catch((err) => {
            if (err.response.status === 404) {
              setRecommendAlert('유효하지 않은 유저입니다.');
              setIsRecommendarOk(-1);
            }
          })
          .finally(() => {
            localStorage.setItem('access_token', access as string);
            localStorage.setItem('refresh_token', refresh as string);
          });
      }}
    />
  );
}

export default RecommendNickname;
