import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { InlinedLinkNonSemanticAtomComponent } from '../../../../atoms/nonsemantic/link/inlined'

const codeSnippetCaseText = `<span tabindex="0">
  <span aria-hidden="true">Visible label</span>
  <span class="sr-only">Accessible label</span>
</span>`
const codeSnippetCaseEmoji = `<span tabindex="0">
  <span aria-hidden="true">🔓</span>
  <span class="sr-only">Accessible label</span>
</span>`

const InlinedLinksNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Inlined</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedLinkNonSemanticAtomComponent id='inlinedLinkNonSemantic' data-case='text' accessibleLabel='Accessible label' visibleLabel='Visible label' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedLinkNonSemanticAtomComponent id='inlinedLinkNonSemantic' data-case='emoji' accessibleLabel='Accessible label' visibleLabel='🔓' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { InlinedLinksNonSemanticMoleculeComponent }
