import { atom } from 'recoil'

export const loginAlertState = atom<boolean>({
  key: 'loginAlertState',
  default: false,
})
