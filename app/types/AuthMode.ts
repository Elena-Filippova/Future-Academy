export type AuthMode = 'login' | 'register'

export interface AuthFormData {
  email: string
  password: string
  confirmPassword?: string
}