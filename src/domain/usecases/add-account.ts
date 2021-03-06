import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  phone: string
  email: string
  password: string
}

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
