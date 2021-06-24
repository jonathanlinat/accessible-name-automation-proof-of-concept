import React from "react";
import PropTypes from "prop-types";

import { StyledLabelledLinkSemanticAtomComponent } from "./component.styled";

const LabelledLinkSemanticAtomComponent = (props) => (
  <StyledLabelledLinkSemanticAtomComponent
    {...props}
    aria-label={props.accessibleLabel}
  >
    {props.visibleLabel}
  </StyledLabelledLinkSemanticAtomComponent>
);

LabelledLinkSemanticAtomComponent.defaultProps = {
  href: "#",
};

LabelledLinkSemanticAtomComponent.propTypes = {
  href: PropTypes.string.isRequired,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired,
};

export { LabelledLinkSemanticAtomComponent };
