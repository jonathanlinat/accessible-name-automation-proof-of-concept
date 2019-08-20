import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { InlinedButtonNonSemanticAtomComponent } from '../../../../atoms/nonsemantic/button/inlined'

const codeSnippetCaseText = `<div tabindex="0">
  <span aria-hidden="true">Visible label</span>
  <span class="sr-only">Accessible label</span>
</div>`
const codeSnippetCaseEmoji = `<div tabindex="0">
  <span aria-hidden="true">🔓</span>
  <span class="sr-only">Accessible label</span>
</div>`

const InlinedButtonsNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Inlined</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedButtonNonSemanticAtomComponent id='inlinedButtonNonSemantic' data-case='text' accessibleLabel='Accessible label' visibleLabel='Visible label' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedButtonNonSemanticAtomComponent id='inlinedButtonNonSemantic' data-case='emoji' accessibleLabel='Accessible label' visibleLabel='🔓' variant='third' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { InlinedButtonsNonSemanticMoleculeComponent }
