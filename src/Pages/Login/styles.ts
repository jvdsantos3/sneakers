import styled from 'styled-components'
import { Box, FlexContainer } from '../../styles/global'

export const LoginContainer = styled(FlexContainer)``

export const LoginContent = styled(Box)`
  h2 {
    color: ${({ theme }) => theme.colors.purple};
    text-align: center;
  }
`
