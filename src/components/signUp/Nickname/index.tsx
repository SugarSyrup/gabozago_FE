import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import InputContainer from '../../common/InputContainer';
import { get } from '@_utils/api';

import * as S from './style';

interface Props {
  setIsNicknameOk: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValue?: string;
}

function Nickname({ setIsNicknameOk, defaultValue }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [nickname, setNicknameState] = useState(defaultValue || searchParams.get('nickname'));
  const [nicknameAlert, setNicknameAlert] = useState('');

  const codeParams = searchParams.get('code');

  useEffect(() => {
    if (
      nickname === '' ||
      nickname === 'null' ||
      nickname === null ||
      nickname === undefined ||
      nickname === 'undefined'
    )
      return;

    if (!isNicknameValid(nickname as string)) {
      setNicknameAlert('한글, 영어, 숫자, _, .만 가능합니다.');
      setIsNicknameOk(false);
      return;
    }

    if (codeParams) {
      localStorage.setItem('access_token', codeParams as string);
    }
    get<{ message: string }>(`/user/nickname/${nickname}`)
      .then((res) => {
        if (res.data.message === 'POSSIBLE') {
          setNicknameAlert('사용 가능한 닉네임이에요!');
          setIsNicknameOk(true);
        } else {
          setNicknameAlert('사용 불가능한 닉네임이에요!');
          setIsNicknameOk(false);
        }
      })
      .catch((err) => {
        setNicknameAlert(`${err.response.data.message}`);
        setIsNicknameOk(false);
      })
      .finally(() => {
        if (codeParams) {
          localStorage.removeItem('access_token');
        }
      });
  }, []);

  function isNicknameValid(nicknameParams: string) {
    if (nicknameParams.includes('?')) {
      return false;
    }
    return true;
  }

  return (
    <InputContainer
      inputType="text"
      name="nickname"
      label="닉네임"
      disabled={false}
      required
      value={
        nickname === null ||
        nickname === undefined ||
        nickname === 'null' ||
        nickname === 'undefined'
          ? ''
          : nickname
      }
      placeholder="닉네임을 입력하세요. (중복 불가)"
      minLength={2}
      maxLength={15}
      alert={
        <S.AlertMessage color={nicknameAlert.length > 14 ? 'red' : 'blue'}>
          {nicknameAlert}
        </S.AlertMessage>
      }
      onInput={(e) => {
        setNicknameState(e.currentTarget.value);
        setNicknameAlert('');
        setIsNicknameOk(false);
      }}
      onButtonClick={() => {
        if (!isNicknameValid(nickname as string)) {
          setNicknameAlert('한글, 영어, 숫자, _, .만 가능합니다.');
          setIsNicknameOk(false);
          return;
        }

        if (codeParams) {
          localStorage.setItem('access_token', codeParams as string);
        }
        get<{ message: string }>(`/user/nickname/${nickname}`)
          .then((res) => {
            if (res.data.message === 'POSSIBLE') {
              setNicknameAlert('사용 가능한 닉네임이에요!');
              setIsNicknameOk(true);
            }
          })
          .catch(() => {
            setNicknameAlert('사용 불가능한 닉네임이에요!');
            setIsNicknameOk(false);
          })
          .finally(() => {
            if (codeParams) {
              localStorage.removeItem('access_token');
            }
          });
      }}
    />
  );
}

export default Nickname;
