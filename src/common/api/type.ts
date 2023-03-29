type PromiseDta<T = Data> = Promise<T>

interface Data {
  code: number
  message: string
  data?: any
}

export type IResponseLogin = PromiseDta<{
  code: number
  data: {
    token: string
    status: number
  }
  message: string
}>


export type IResUserInfo = PromiseDta<{
  userInfo: UserInfo
  message: string
  code: number
}>

export interface UserInfo {
  id: string
  role: string
  name: string
  avatar: string
  description: string
}


export type IResLogout = PromiseDta<{
  data: {
    status: number
  }
  message: string
  code: number
}>


