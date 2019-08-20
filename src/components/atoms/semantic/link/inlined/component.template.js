import React from 'react'
import PropTypes from 'prop-types'

import { StyledInlinedLinkSemanticAtomComponent } from './component.styled'

const InlinedLinkSemanticAtomComponent = props => (
  <StyledInlinedLinkSemanticAtomComponent {...props}>
    <span aria-hidden='true'>{props.visibleLabel}</span>
    <span className='sr-only'>{props.accessibleLabel}</span>
  </StyledInlinedLinkSemanticAtomComponent>
)

InlinedLinkSemanticAtomComponent.defaultProps = {
  href: '#'
}

InlinedLinkSemanticAtomComponent.propTypes = {
  href: PropTypes.string.isRequired,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired
}

export { InlinedLinkSemanticAtomComponent }
