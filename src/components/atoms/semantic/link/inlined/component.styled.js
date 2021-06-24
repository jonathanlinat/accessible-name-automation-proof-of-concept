import styled from "styled-components";

const StyledInlinedLinkSemanticAtomComponent = styled.a`
  font-size: 1em;
  line-height: 1;
  color: #30f;
  text-decoration: none;

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
`;

export { StyledInlinedLinkSemanticAtomComponent };
