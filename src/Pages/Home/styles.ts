import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 82.5rem;
  margin: 0 auto 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

export const ProductActionsSection = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`

export const ProductSearch = styled.form`
  height: 100%;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    all: unset;
    flex: 1;
    padding: 0.75rem;
    font-size: 0.875rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.87rem;
`

export const Pagination = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  > span {
    all: unset;
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme.colors['base-button']};
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors['base-hover']};
    }
  }
`
