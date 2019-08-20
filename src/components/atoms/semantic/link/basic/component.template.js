import React from 'react'
import PropTypes from 'prop-types'

import { StyledBasicLinkSemanticAtomComponent } from './component.styled'

const BasicLinkSemanticAtomComponent = props => <StyledBasicLinkSemanticAtomComponent {...props} />

BasicLinkSemanticAtomComponent.defaultProps = {
  href: '#'
}

BasicLinkSemanticAtomComponent.propTypes = {
  href: PropTypes.string.isRequired
}

export { BasicLinkSemanticAtomComponent }
