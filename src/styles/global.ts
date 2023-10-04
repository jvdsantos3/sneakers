import styled, { createGlobalStyle } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['yellow-light']};
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.yellow};
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`

export const FlexContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  width: 25vw;
  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-hover']};
  background: ${({ theme }) => theme.colors['base-input']};
  padding: 1rem;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const InputWithErroContainer = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.red};
    }
  }
`

export const Button = styled.button`
  margin: 1rem 0;

  height: 48px;
  border: 0;
  background: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['purple-dark']};
    transition: background-color 0.2s;
  }
`

interface ButtonSecondaryProps {
  variant: 'yellow' | 'red' | 'purple'
}

export const ButtonSecondary = styled.button<ButtonSecondaryProps>`
  width: 12rem;
  height: 3rem;
  background: transparent;
  border: 1px solid ${({ theme, variant }) => theme.colors[variant]};
  border-radius: 8px;
  cursor: pointer;

  color: ${({ theme, variant }) => theme.colors[variant]};
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${({ theme, variant }) => theme.colors[variant]};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.1s;
  }
`

export const DialogCloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-title']};
`

export const BaseDialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const BaseDialogContent = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors['base-card']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
