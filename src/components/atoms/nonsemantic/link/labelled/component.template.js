import React from "react";
import PropTypes from "prop-types";

import { StyledLabelledLinkNonSemanticAtomComponent } from "./component.styled";

const LabelledLinkNonSemanticAtomComponent = (props) => (
  <StyledLabelledLinkNonSemanticAtomComponent
    {...props}
    aria-label={props.accessibleLabel}
  >
    {props.visibleLabel}
  </StyledLabelledLinkNonSemanticAtomComponent>
);

LabelledLinkNonSemanticAtomComponent.defaultProps = {
  tabIndex: "0",
};

LabelledLinkNonSemanticAtomComponent.propTypes = {
  tabIndex: PropTypes.string.isRequired,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired,
};

export { LabelledLinkNonSemanticAtomComponent };
