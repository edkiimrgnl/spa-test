export interface Token {
  token: string
}

export interface User {
  id?: string
  username: string
  password: string
  first_name?: string
  last_name?: string
  is_active: boolean
  last_login?: string
  is_superuser?: boolean
}