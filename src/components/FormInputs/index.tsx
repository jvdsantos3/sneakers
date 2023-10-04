import { CurrencyInput } from 'react-currency-mask'
import { Button, Input } from '../../styles/global'
import { FormInputsContainer } from './styles'
import { useFormContext, Controller } from 'react-hook-form'

export function FormInputs() {
  const {
    register,
    control,
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <FormInputsContainer as="div">
      <Input
        type="text"
        placeholder="Link da imagem"
        required
        {...register('image')}
      />
      <Input
        type="text"
        placeholder="Nome do produto"
        required
        {...register('name')}
      />
      <Input type="text" placeholder="Marca" required {...register('brand')} />
      <div>
        <Input
          type="number"
          placeholder="Tamanho"
          required
          {...register('size', {
            valueAsNumber: true,
          })}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value } }) => (
            <CurrencyInput
              value={value}
              onChangeValue={(_, value) => {
                onChange(value)
              }}
              InputElement={<Input placeholder="Preço" />}
            />
          )}
        />
        <Input
          type="number"
          placeholder="Quantidade"
          required
          {...register('amount')}
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Cadastrar
      </Button>
    </FormInputsContainer>
  )
}
