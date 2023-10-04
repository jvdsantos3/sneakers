import { X } from 'phosphor-react'
import { DialogContent } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import {
  BaseDialogOverlay,
  ButtonSecondary,
  DialogCloseButton,
  Form,
} from '../../styles/global'
import { FormInputs } from '../FormInputs'
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

  const newProductForm = useForm<NewProductFormInputs>({
    resolver: zodResolver(newProductFormSchema),
  })

  const { createProduct } = useContext(ProductContext)

  const { handleSubmit, reset } = newProductForm

  function handleCreateNewProduct(data: NewProductFormInputs) {
    const product = { ...data, price: data.price * 100 }

    createProduct(product)

    setOpen(false)
    reset()
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <ButtonSecondary variant="purple">Adicionar produto</ButtonSecondary>
      </Dialog.Trigger>
      <Dialog.Portal>
        <BaseDialogOverlay />
        <DialogContent>
          <Dialog.Title>Novo produto</Dialog.Title>

          <DialogCloseButton>
            <X size={24} />
          </DialogCloseButton>

          <Form onSubmit={handleSubmit(handleCreateNewProduct)}>
            <FormProvider {...newProductForm}>
              <FormInputs />
            </FormProvider>
          </Form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
