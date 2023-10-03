import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 82.5rem;
  margin: 0 auto;

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

  > button {
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
  }
`

export const ProductSearch = styled.div`
  height: 100%;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

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
