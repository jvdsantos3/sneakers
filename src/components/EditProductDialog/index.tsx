import { X } from 'phosphor-react'
import { DialogContent, EditDialogOverlay } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { z } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogCloseButton, Form } from '../../styles/global'
import { FormInputs } from '../FormInputs'

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
  const editProductForm = useForm<EditProductFormInputs>({
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

  const { handleSubmit } = editProductForm

  return (
    <Dialog.Portal>
      <EditDialogOverlay />
      <DialogContent>
        <Dialog.Title>Editar</Dialog.Title>

        <DialogCloseButton>
          <X size={24} />
        </DialogCloseButton>

        <Form onSubmit={handleSubmit(editProduct)}>
          <FormProvider {...editProductForm}>
            <FormInputs />
          </FormProvider>
        </Form>
      </DialogContent>
    </Dialog.Portal>
  )
}
