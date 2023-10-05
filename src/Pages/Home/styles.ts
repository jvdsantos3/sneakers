import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 3rem;
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
  width: 100%;
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
`

interface PaginationButtonProps {
  $variant?: 'active'
}

export const PaginationButton = styled.span<PaginationButtonProps>`
  all: unset;
  width: 2rem;
  height: 2rem;
  background: ${({ theme, $variant }) =>
    $variant ? theme.colors.purple : theme.colors['base-button']};
  border-radius: 4px;
  color: ${({ theme, $variant }) =>
    $variant ? theme.colors.white : theme.colors['base-text']};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background: ${({ theme, $variant }) =>
      $variant ? theme.colors['purple-dark'] : theme.colors['base-hover']};
  }
`

export const ProductsEmpty = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-label']};
`
