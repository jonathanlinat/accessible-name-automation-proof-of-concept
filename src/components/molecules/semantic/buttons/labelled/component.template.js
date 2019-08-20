import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { LabelledButtonSemanticAtomComponent } from '../../../../atoms/semantic/button/labelled'

const codeSnippetCaseText = '<button type="button" aria-label="Accessible label">Visible label</button>'
const codeSnippetCaseEmoji = '<button type="button" aria-label="Accessible label">🔓</button>'

const LabelledButtonsSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Labelled</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledButtonSemanticAtomComponent id='labelledButtonSemantic' data-case='text' accessibleLabel='Accessible label' visibleLabel='Visible label' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledButtonSemanticAtomComponent id='labelledButtonSemantic' data-case='emoji' accessibleLabel='Accessible label' visibleLabel='🔓' variant='third' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { LabelledButtonsSemanticMoleculeComponent }
