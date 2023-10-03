import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ProductCardContainer = styled.div`
  max-width: 15rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  img {
    width: 14rem;
  }

  > div {
    padding: 1rem;

    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors['base-label']};
      font-weight: 700;
      opacity: 0.8;
      text-transform: uppercase;
    }

    p {
      margin: 0.25rem 0 0.75rem;
      font-size: 1rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};

    p {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors.white};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-title']};
`

export const ProductDetails = styled.div`
  padding: 3rem;

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  img {
    width: 50rem;
  }
`

export const ProductDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const ProductDetailsHeader = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  > span {
    margin: 0.5rem 0 1.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
    text-transform: uppercase;
    font-weight: bold;
  }

  > strong {
    color: ${({ theme }) => theme.colors.purple};
    font-size: 1.5rem;
  }
`

export const ProductDetailSize = styled.div`
  margin-top: 1rem;

  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-label']};
      text-transform: uppercase;
      font-weight: bold;
    }

    span {
      width: 5rem;
      height: 2rem;
      background: ${({ theme }) => theme.colors['base-card']};
      border: 1px solid ${({ theme }) => theme.colors['base-button']};
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const ProductDetailsActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`

interface ButtonProps {
  variant: 'yellow' | 'red'
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  padding: 0.5rem;
  border: 1px solid ${({ theme, variant }) => theme.colors[variant]};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme, variant }) => theme.colors[variant]};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme, variant }) => theme.colors[variant]};
    transition: all 0.2s;
  }
`
