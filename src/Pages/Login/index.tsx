import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginContainer, LoginContent } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { UserContext } from '../../contexts/AuthContext'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  })

  const { login } = useContext(UserContext)

  function handleLogin(data: LoginFormInputs) {
    login(data)
  }

  return (
    <LoginContainer>
      <LoginContent>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <input
              type="text"
              required
              placeholder="E-mail"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <input
            type="password"
            required
            placeholder="Senha"
            {...register('password')}
          />
          <button type="submit" disabled={isSubmitting}>
            Entrar
          </button>
        </form>
      </LoginContent>
    </LoginContainer>
  )
}
