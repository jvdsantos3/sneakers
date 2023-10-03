import * as AlertDialog from '@radix-ui/react-alert-dialog'
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  Cancel,
  Confirm,
  Flex,
} from './styles'

interface DeleteAlertProps {
  handleDeleteProduct: () => void
}

export function DeleteAlert({ handleDeleteProduct }: DeleteAlertProps) {
  return (
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Deseja excluir esse produto?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente esse
          produto.
        </AlertDialogDescription>

        <Flex>
          <AlertDialog.Cancel asChild>
            <Cancel>Cancelar</Cancel>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild onClick={handleDeleteProduct}>
            <Confirm>Sim, excluir produto</Confirm>
          </AlertDialog.Action>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  )
}
