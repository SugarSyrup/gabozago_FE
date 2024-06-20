import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { loginAlertState } from '../../recoil/loginAlertState'

interface Props {
  children: React.ReactNode
}

function IsLoginTemplate({ children }: Props) {
  const navigate = useNavigate()
  const setIsLoginAlert = useSetRecoilState(loginAlertState)

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')

    if (!access_token) {
      setIsLoginAlert(true)
      navigate('/')
    }
  }, [])

  return <>{children}</>
}

export default IsLoginTemplate
