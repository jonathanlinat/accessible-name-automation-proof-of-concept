import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { BasicButtonNonSemanticAtomComponent } from '../../../../atoms/nonsemantic/button/basic'

const codeSnippetCaseText = '<div tabindex="0">Visible label</div>'
const codeSnippetCaseEmoji = '<div tabindex="0">🔓</div>'

const BasicButtonsNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Basic</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicButtonNonSemanticAtomComponent id='basicButtonNonSemantic' data-case='text'>Visible label</BasicButtonNonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicButtonNonSemanticAtomComponent id='basicButtonNonSemantic' data-case='emoji' variant='third'>🔓</BasicButtonNonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { BasicButtonsNonSemanticMoleculeComponent }
