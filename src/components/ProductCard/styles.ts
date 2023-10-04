import styled from 'styled-components'
import { BaseDialogContent, ButtonSecondary } from '../../styles/global'

export const CardContainer = styled.div`
  max-width: 15rem;
  width: 100%;
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
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors['base-label']};
      font-weight: 700;
      opacity: 0.8;
      text-transform: uppercase;
    }

    p {
      flex: 1;
      margin: 0.5rem 0 0.75rem;
      font-size: 1rem;
    }

    strong {
      justify-self: flex-end;
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};

    p {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`

export const CardContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductCardContent = styled(BaseDialogContent)`
  background: ${({ theme }) => theme.colors.white};
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

export const ProductDetailTags = styled.div`
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

export const ProductActionButton = styled(ButtonSecondary)`
  width: 100%;
  padding: 0.5rem;
`
