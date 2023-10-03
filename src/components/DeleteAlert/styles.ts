import styled from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const AlertDialogOverlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const AlertDialogContent = styled(AlertDialog.Content)`
  max-width: 25rem;
  padding: 2rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AlertDialogTitle = styled(AlertDialog.Title)``

export const AlertDialogDescription = styled(AlertDialog.Description)``

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

const BaseButton = styled.button`
  all: unset;
  padding: 0.5rem 1rem;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;

  cursor: pointer;
`

export const Cancel = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['base-label']};
  }
`

export const Confirm = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['red-light']};
  border: 1px solid ${({ theme }) => theme.colors['red-light']};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.red};
  }
`
