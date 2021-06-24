import React from "react";
import PropTypes from "prop-types";

import { StyledElementVariantWrapperAtomComponent } from "./component.styled";

const ElementVariantWrapperAtomComponent = (props) => (
  <StyledElementVariantWrapperAtomComponent {...props}>
    {props.children}
  </StyledElementVariantWrapperAtomComponent>
);

ElementVariantWrapperAtomComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export { ElementVariantWrapperAtomComponent };
