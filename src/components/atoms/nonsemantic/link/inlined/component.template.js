import React from 'react'
import PropTypes from 'prop-types'

import { StyledInlinedLinkNonSemanticAtomComponent } from './component.styled'

const InlinedLinkNonSemanticAtomComponent = props => (
  <StyledInlinedLinkNonSemanticAtomComponent {...props}>
    <span aria-hidden='true'>{props.visibleLabel}</span>
    <span className='sr-only'>{props.accessibleLabel}</span>
  </StyledInlinedLinkNonSemanticAtomComponent>
)

InlinedLinkNonSemanticAtomComponent.defaultProps = {
  tabIndex: '0'
}

InlinedLinkNonSemanticAtomComponent.propTypes = {
  tabIndex: PropTypes.string.isRequired,
  accessibleLabel: PropTypes.string.isRequired,
  visibleLabel: PropTypes.string.isRequired
}

export { InlinedLinkNonSemanticAtomComponent }
