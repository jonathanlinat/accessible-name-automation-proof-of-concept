import styled from 'styled-components'

const StyledInlinedLinkNonSemanticAtomComponent = styled.span`
  font-size: 1em;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: #30f;

  &:focus {
    outline: 2px solid #1b0088;
    outline-offset: 4px;
  }

  .sr-only {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    border: 0;
  }
`

export { StyledInlinedLinkNonSemanticAtomComponent }
