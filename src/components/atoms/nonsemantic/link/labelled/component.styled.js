import styled from "styled-components";

const StyledLabelledLinkNonSemanticAtomComponent = styled.span`
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
`;

export { StyledLabelledLinkNonSemanticAtomComponent };
