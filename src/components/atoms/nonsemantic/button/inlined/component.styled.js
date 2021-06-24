import styled, { css } from "styled-components";

const StyledInlinedButtonNonSemanticAtomComponent = styled.div`
  display: inline-block;
  font-size: 1em;
  line-height: 1;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  user-select: none;
  background-color: #e9124c;
  color: #fff;

  &:focus {
    outline: 2px solid #1b0088;
    outline-offset: 4px;
  }

  &:hover,
  &:focus {
    background-color: #dc1147;
  }

  ${(props) =>
    props.variant === "third" &&
    css`
      border-color: #ddd;
      background-color: #fff;
      color: #000;

      &:hover,
      &:focus {
        background-color: #fff;
      }
    `}

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

export { StyledInlinedButtonNonSemanticAtomComponent };
