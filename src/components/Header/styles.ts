import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    all: unset;
    cursor: pointer;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      padding: 0.25rem 0;
      border-bottom: 2px solid ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors['base-label']};

      &:hover {
        border-color: ${({ theme }) => theme.colors.purple};
      }

      &.active {
        color: ${({ theme }) => theme.colors.purple};
      }
    }
  }
`

export const HeaderProfile = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    padding: 0.25rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};
    text-decoration: none;
    color: ${({ theme }) => theme.colors['base-subtitle']};

    &:hover {
      border-color: ${({ theme }) => theme.colors.purple};
    }

    &.active {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  button {
    all: unset;
    width: 2rem;
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.red};
    border-radius: 9999px;
    color: ${({ theme }) => theme.colors.red};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.2s;
    }
  }
`
