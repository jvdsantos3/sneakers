import styled from 'styled-components'

export const BaseContainer = styled.main`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BaseContent = styled.article`
  width: 25vw;
  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.purple};
    text-align: center;
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.red};
      }
    }

    input {
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors['base-title']};
      background: ${({ theme }) => theme.colors['base-input']};
      padding: 1rem;

      &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.purple};
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }
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

export const RegisterContainer = styled(BaseContainer)``

export const RegisterContent = styled(BaseContent)``
