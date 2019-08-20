import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { InlinedButtonSemanticAtomComponent } from '../../../../atoms/semantic/button/inlined'

const codeSnippetCaseText = `<button type="button">
  <span aria-hidden="true">Visible label</span>
  <span class="sr-only">Accessible label</span>
</button>`
const codeSnippetCaseEmoji = `<button type="button">
  <span aria-hidden="true">🔓</span>
  <span class="sr-only">Accessible label</span>
</button>`

const InlinedButtonsSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Inlined</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedButtonSemanticAtomComponent id='inlinedButtonSemantic' data-case='text' accessibleLabel='Accessible label' visibleLabel='Visible label' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedButtonSemanticAtomComponent id='inlinedButtonSemantic' data-case='emoji' accessibleLabel='Accessible label' visibleLabel='🔓' variant='third' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { InlinedButtonsSemanticMoleculeComponent }
