import React from 'react'
import PropTypes from 'prop-types'

import { StyledBasicButtonNonSemanticAtomComponent } from './component.styled'

const BasicButtonNonSemanticAtomComponent = props => <StyledBasicButtonNonSemanticAtomComponent {...props} />

BasicButtonNonSemanticAtomComponent.defaultProps = {
  tabIndex: '0'
}

BasicButtonNonSemanticAtomComponent.propTypes = {
  tabIndex: PropTypes.string.isRequired
}

export { BasicButtonNonSemanticAtomComponent }
