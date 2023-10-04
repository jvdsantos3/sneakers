import { useContext } from 'react'
import * as ToastComponent from '@radix-ui/react-toast'
import { ToastAction, ToastRoot, ToastTitle, ToastViewport } from './styles'
import { CheckCircle, Warning, X, XCircle } from 'phosphor-react'
import { ToastContext } from '../../contexts/ToastContext'

interface ToastProps {
  variant: 'warnig' | 'danger' | 'success'
  message: string
}

export function Toast({ variant, message }: ToastProps) {
  const { open, setOpen } = useContext(ToastContext)

  return (
    <>
      <ToastComponent.Provider swipeDirection="right" duration={3000}>
        <ToastRoot open={open} onOpenChange={setOpen} variant={variant}>
          <ToastTitle>
            {variant === 'warnig' && <Warning size={20} weight="fill" />}
            {variant === 'success' && <CheckCircle size={20} weight="fill" />}
            {variant === 'danger' && <XCircle size={20} weight="fill" />}
            {message}
          </ToastTitle>

          <ToastAction asChild altText="Goto schedule to undo">
            <button>
              <X size={20} />
            </button>
          </ToastAction>
        </ToastRoot>
        <ToastViewport />
      </ToastComponent.Provider>
    </>
  )
}
