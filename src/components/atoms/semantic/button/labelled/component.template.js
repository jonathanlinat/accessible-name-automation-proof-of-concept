import React from "react";
import PropTypes from "prop-types";

import { StyledLabelledButtonSemanticAtomComponent } from "./component.styled";

const LabelledButtonSemanticAtomComponent = (props) => (
  <StyledLabelledButtonSemanticAtomComponent
    {...props}
    aria-label={props.accessibleLabel}
  >
    {props.visibleLabel}
  </StyledLabelledButtonSemanticAtomComponent>
);

LabelledButtonSemanticAtomComponent.defaultProps = {
  type: "button",
};

LabelledButtonSemanticAtomComponent.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired,
};

export { LabelledButtonSemanticAtomComponent };
