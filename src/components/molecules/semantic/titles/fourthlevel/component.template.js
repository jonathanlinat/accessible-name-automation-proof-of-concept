import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'

const codeSnippet = '<h4>Visible title</h4>'

const FourthLevelTitlesSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Fourth level</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <FourthLevelTitleSemanticAtomComponent id='fourthLevelTitleSemantic'>Visible title</FourthLevelTitleSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippet}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { FourthLevelTitlesSemanticMoleculeComponent }
