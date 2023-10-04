import { ReactNode, createContext, useEffect, useRef, useState } from 'react'
import { Toast } from '../components/Toast'

interface ToastProps {
  variant: 'warnig' | 'danger' | 'success'
  message: string
}

interface ToastContextType {
  open: boolean
  toast: ReactNode
  activeToast: (toastProps: ToastProps) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastContext = createContext({} as ToastContextType)

export function ToastProvider({ children }: ToastProviderProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)
  const [toastProps, setToastProps] = useState<ToastProps>({
    variant: 'warnig',
    message: '',
  })

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  function activeToast({ variant, message }: ToastProps) {
    setOpen(false)
    window.clearInterval(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway()
      setOpen(true)
    }, 100)

    setToastProps({ variant, message })
  }

  const toast = (
    <Toast variant={toastProps.variant} message={toastProps.message} />
  )

  useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <ToastContext.Provider value={{ open, toast, activeToast, setOpen }}>
      {children}
    </ToastContext.Provider>
  )
}
