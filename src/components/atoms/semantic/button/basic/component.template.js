import React from "react";
import PropTypes from "prop-types";

import { StyledBasicButtonSemanticAtomComponent } from "./component.styled";

const BasicButtonSemanticAtomComponent = (props) => (
  <StyledBasicButtonSemanticAtomComponent {...props} />
);

BasicButtonSemanticAtomComponent.defaultProps = {
  type: "button",
};

BasicButtonSemanticAtomComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export { BasicButtonSemanticAtomComponent };
