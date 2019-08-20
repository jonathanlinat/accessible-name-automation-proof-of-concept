import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabelledButtonNonSemanticAtomComponent } from './component.styled'

const LabelledButtonNonSemanticAtomComponent = props => (
  <StyledLabelledButtonNonSemanticAtomComponent {...props} aria-label={props.accessibleLabel}>{props.visibleLabel}</StyledLabelledButtonNonSemanticAtomComponent>
)

LabelledButtonNonSemanticAtomComponent.defaultProps = {
  tabIndex: '0'
}

LabelledButtonNonSemanticAtomComponent.propTypes = {
  tabIndex: PropTypes.string.isRequired,
  variant: PropTypes.string,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired
}

export { LabelledButtonNonSemanticAtomComponent }
