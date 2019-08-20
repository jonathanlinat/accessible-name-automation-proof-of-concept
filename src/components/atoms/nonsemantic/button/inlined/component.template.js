import React from 'react'
import PropTypes from 'prop-types'

import { StyledInlinedButtonNonSemanticAtomComponent } from './component.styled'

const InlinedButtonNonSemanticAtomComponent = props => (
  <StyledInlinedButtonNonSemanticAtomComponent {...props}>
    <span aria-hidden='true'>{props.visibleLabel}</span>
    <span className='sr-only'>{props.accessibleLabel}</span>
  </StyledInlinedButtonNonSemanticAtomComponent>
)

InlinedButtonNonSemanticAtomComponent.defaultProps = {
  tabIndex: '0'
}

InlinedButtonNonSemanticAtomComponent.propTypes = {
  tabIndex: PropTypes.string.isRequired,
  variant: PropTypes.string,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired
}

export { InlinedButtonNonSemanticAtomComponent }
