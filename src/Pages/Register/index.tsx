import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterContainer, RegisterContent } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { UserContext } from '../../contexts/AuthContext'
import {
  Button,
  Form,
  Input,
  InputWithErroContainer,
} from '../../styles/global'

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
        <h2>Cadastro</h2>

        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input
            type="text"
            required
            placeholder="Nome"
            {...register('name')}
          />
          <InputWithErroContainer>
            <Input
              type="text"
              required
              placeholder="E-mail"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </InputWithErroContainer>
          <Input
            type="password"
            required
            placeholder="Senha"
            {...register('password')}
          />
          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </Form>
      </RegisterContent>
    </RegisterContainer>
  )
}
