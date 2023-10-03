import { X } from 'phosphor-react'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyInput } from 'react-currency-mask'

const editProductFormSchema = z.object({
  image: z.string(),
  name: z.string(),
  brand: z.string(),
  size: z.coerce.number(),
  price: z.coerce.number(),
  amount: z.coerce.number(),
})

export type EditProductFormInputs = z.infer<typeof editProductFormSchema>

interface EditProductDialogProps {
  image: string
  name: string
  brand: string
  size: number
  price: number
  amount: number
  editProduct: (data: EditProductFormInputs) => void
}

export function EditProductDialog({
  image,
  name,
  brand,
  size,
  price,
  amount,
  editProduct,
}: EditProductDialogProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditProductFormInputs>({
    resolver: zodResolver(editProductFormSchema),
    defaultValues: {
      image,
      name,
      brand,
      size,
      price: price / 100,
      amount,
    },
  })

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Editar</Dialog.Title>

        <DialogClose>
          <X size={24} />
        </DialogClose>

        <form onSubmit={handleSubmit(editProduct)}>
          <input
            type="text"
            placeholder="Link da imagem"
            required
            {...register('image')}
          />
          <input
            type="text"
            placeholder="Nome do produto"
            required
            {...register('name')}
          />
          <input
            type="text"
            placeholder="Marca"
            required
            {...register('brand')}
          />
          <div>
            <input
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
                  InputElement={<input placeholder="Preço" />}
                />
              )}
            />
            <input
              type="number"
              placeholder="Quantidade"
              required
              {...register('amount')}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Salvar
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  )
}
