import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  margin-top: 1rem;
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
