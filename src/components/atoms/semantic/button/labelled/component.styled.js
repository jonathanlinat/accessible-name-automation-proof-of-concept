import styled, { css } from 'styled-components'

const StyledLabelledButtonSemanticAtomComponent = styled.button`
  font-size: 1em;
  line-height: 1;
  box-sizing: border-box;
  padding: .75rem;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  background-color: #e9124c;
  color: #fff;

  &:focus {
    outline: 2px solid #1b0088;
    outline-offset: 4px;
  }

  &:hover, &:focus {
    background-color: #dc1147;
  }

  ${props => (props.variant === 'third') && css`
    border-color: #ddd;
    background-color: #fff;
    color: #000;

    &:hover, &:focus {
      background-color: #fff;
    }
  `}
`

export { StyledLabelledButtonSemanticAtomComponent }
