import React from "react";
import PropTypes from "prop-types";

import { StyledBasicLinkNonSemanticAtomComponent } from "./component.styled";

const BasicLinkNonSemanticAtomComponent = (props) => (
  <StyledBasicLinkNonSemanticAtomComponent {...props} />
);

BasicLinkNonSemanticAtomComponent.defaultProps = {
  tabIndex: "0",
};

BasicLinkNonSemanticAtomComponent.propTypes = {
  tabIndex: PropTypes.string.isRequired,
};

export { BasicLinkNonSemanticAtomComponent };
