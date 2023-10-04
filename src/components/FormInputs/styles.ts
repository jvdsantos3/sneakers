import styled from 'styled-components'
import { Form } from '../../styles/global'

export const FormInputsContainer = styled(Form)`
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`
