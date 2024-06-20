import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import InputContainer from '../../common/InputContainer'
import { get } from '../../../utils/api'

import * as S from './style'

interface Props {
  setIsNicknameOk: React.Dispatch<React.SetStateAction<boolean>>
  defaultValue?: string
}

function Nickname({ setIsNicknameOk, defaultValue }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const [nickname, setNicknameState] = useState(searchParams.get('nickname'))
  const [nicknameAlert, setNicknameAlert] = useState('')

  useEffect(() => {
    if (nickname === '' || nickname === null) return

    const access = localStorage.getItem('access_token')
    const refresh = localStorage.getItem('refresh_token')

    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')

    if (!isNicknameValid(nickname as string)) {
      setNicknameAlert('한글, 영어, 숫자, _, .만 가능합니다.')
      setIsNicknameOk(false)
      return
    }

    get<{ message: string }>(`/user/nickname/${nickname}`)
      .then(res => {
        if (res.data.message === 'POSSIBLE') {
          setNicknameAlert('사용 가능한 닉네임이에요!')
          setIsNicknameOk(true)
        } else {
          setNicknameAlert('사용 불가능한 닉네임이에요!')
          setIsNicknameOk(false)
        }
      })
      .catch(err => {
        setNicknameAlert(`${err.response.data.message}`)
        setIsNicknameOk(false)
      })
      .finally(() => {
        localStorage.setItem('access_token', access as string)
        localStorage.setItem('refresh_token', refresh as string)
      })
  }, [])

  function isNicknameValid(nickname: string) {
    if (nickname.includes('?')) {
      return false
    }
    return true
  }

  return (
    <InputContainer
      inputType="text"
      name="nickname"
      label="닉네임"
      disabled={false}
      required
      value={nickname || defaultValue}
      placeholder="닉네임을 입력하세요. (중복 불가)"
      minLength={2}
      maxLength={15}
      alert={
        <S.AlertMessage color={nicknameAlert.length > 14 ? 'red' : 'blue'}>
          {nicknameAlert}
        </S.AlertMessage>
      }
      onInput={e => {
        setNicknameState(e.currentTarget.value)
        setNicknameAlert('')
        setIsNicknameOk(false)
      }}
      onButtonClick={() => {
        const access = localStorage.getItem('access_token')
        const refresh = localStorage.getItem('refresh_token')

        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        if (!isNicknameValid(nickname as string)) {
          setNicknameAlert('한글, 영어, 숫자, _, .만 가능합니다.')
          setIsNicknameOk(false)
          return
        }

        get<{ message: string }>(`/user/nickname/${nickname}`)
          .then(res => {
            if (res.data.message === 'POSSIBLE') {
              setNicknameAlert('사용 가능한 닉네임이에요!')
              setIsNicknameOk(true)
            }
          })
          .catch(err => {
            setNicknameAlert(
              `${err.response.data.message === 'IMPOSSIBLE' ? '사용 불가능한 닉네임이에요!' : err.response.data.message}`
            )
            setIsNicknameOk(false)
          })
          .finally(() => {
            localStorage.setItem('access_token', access as string)
            localStorage.setItem('refresh_token', refresh as string)
          })
      }}
    />
  )
}

export default Nickname
