import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterContainer, RegisterContent } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { UserContext } from '../../contexts/AuthContext'

const registerFormSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'E-mail Inválido.' }),
  password: z.string(),
})

export type RegisterFormInputs = z.infer<typeof registerFormSchema>

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
  })

  const { registerUser } = useContext(UserContext)

  function handleRegister(data: RegisterFormInputs) {
    registerUser(data)
  }

  return (
    <RegisterContainer>
      <RegisterContent>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(handleRegister)}>
          <input
            type="text"
            required
            placeholder="Nome"
            {...register('name')}
          />
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
            type="text"
            required
            placeholder="Senha"
            {...register('password')}
          />
          <button type="submit" disabled={isSubmitting}>
            Entrar
          </button>
        </form>
      </RegisterContent>
    </RegisterContainer>
  )
}
