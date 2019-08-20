import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { BasicButtonSemanticAtomComponent } from '../../../../atoms/semantic/button/basic'

const codeSnippetCaseText = '<button type="button">Visible label</button>'
const codeSnippetCaseEmoji = '<button type="button">🔓</button>'

const BasicButtonsSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Basic</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicButtonSemanticAtomComponent id='basicButtonSemantic' data-case='text'>Visible label</BasicButtonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicButtonSemanticAtomComponent id='basicButtonSemantic' data-case='emoji' variant='third'>🔓</BasicButtonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { BasicButtonsSemanticMoleculeComponent }
