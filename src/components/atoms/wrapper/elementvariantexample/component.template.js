import React from "react";
import PropTypes from "prop-types";

import { StyledElementVariantExampleWrapperAtomComponent } from "./component.styled";

const ElementVariantExampleWrapperAtomComponent = (props) => (
  <StyledElementVariantExampleWrapperAtomComponent {...props}>
    {props.children}
  </StyledElementVariantExampleWrapperAtomComponent>
);

ElementVariantExampleWrapperAtomComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export { ElementVariantExampleWrapperAtomComponent };
