import { X } from 'phosphor-react'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyInput } from 'react-currency-mask'
import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

const newProductFormSchema = z.object({
  image: z.string(),
  name: z.string(),
  brand: z.string(),
  size: z.coerce.number(),
  price: z.coerce.number(),
  amount: z.coerce.number(),
})

type NewProductFormInputs = z.infer<typeof newProductFormSchema>

export function NewProductDialog() {
  const [open, setOpen] = useState(false)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewProductFormInputs>({
    resolver: zodResolver(newProductFormSchema),
  })

  const { createProduct } = useContext(ProductContext)

  function handleCreateNewProduct(data: NewProductFormInputs) {
    const product = { ...data, price: data.price * 100 }

    createProduct(product)

    setOpen(false)
    reset()
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>Adicionar produto</button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <Dialog.Title>Novo produto</Dialog.Title>

          <DialogClose>
            <X size={24} />
          </DialogClose>

          <form onSubmit={handleSubmit(handleCreateNewProduct)}>
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
              Cadastrar
            </button>
          </form>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}
