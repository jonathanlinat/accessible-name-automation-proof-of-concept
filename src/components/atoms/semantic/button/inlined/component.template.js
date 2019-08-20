import React from 'react'
import PropTypes from 'prop-types'

import { StyledInlinedButtonSemanticAtomComponent } from './component.styled'

const InlinedButtonSemanticAtomComponent = props => (
  <StyledInlinedButtonSemanticAtomComponent {...props}>
    <span aria-hidden='true'>{props.visibleLabel}</span>
    <span className='sr-only'>{props.accessibleLabel}</span>
  </StyledInlinedButtonSemanticAtomComponent>
)

InlinedButtonSemanticAtomComponent.defaultProps = {
  type: 'button'
}

InlinedButtonSemanticAtomComponent.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired
}

export { InlinedButtonSemanticAtomComponent }
