import styled, { keyframes } from 'styled-components'
import * as Toast from '@radix-ui/react-toast'

const hide = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const slideIn = keyframes`
    from {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
  to {
    transform: translateX(0);
  }
`

const swipeOut = keyframes`
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }
  to {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
`

interface ToastRootProps {
  $variant: 'warnig' | 'danger' | 'success'
}

const toastRoot$variants = {
  warnig: 'yellow',
  danger: 'red',
  success: 'green',
} as const

export const ToastRoot = styled(Toast.Root)<ToastRootProps>`
  background-color: ${({ theme, $variant }) =>
    theme.colors[`${toastRoot$variants[$variant]}`]};
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }

  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`

export const ToastTitle = styled(Toast.Title)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ToastAction = styled(Toast.Action)`
  all: unset;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ToastViewport = styled(Toast.Viewport)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`
