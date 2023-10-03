import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogRoot = styled(Dialog.Root)``

export const DialogTrigger = styled(Dialog.Trigger)`
  width: 12rem;
  height: 3rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.1s;
  }
`

export const DialogPortal = styled(Dialog.Portal)``

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const DialogContent = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors['base-card']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors['base-button']};
      background: ${({ theme }) => theme.colors['base-input']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    > div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    button[type='submit'] {
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
    }
  }
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-title']};
`
