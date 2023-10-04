import styled from 'styled-components'
import { Box, FlexContainer } from '../../styles/global'

export const RegisterContainer = styled(FlexContainer)``

export const RegisterContent = styled(Box)`
  h2 {
    color: ${({ theme }) => theme.colors.purple};
    text-align: center;
  }
`
