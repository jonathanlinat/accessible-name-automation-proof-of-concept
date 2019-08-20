import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { InlinedLinkSemanticAtomComponent } from '../../../../atoms/semantic/link/inlined'

const codeSnippetCaseText = `<a href="#">
  <span aria-hidden="true">Visible label</span>
  <span class="sr-only">Accessible label</span>
</a>`
const codeSnippetCaseEmoji = `<a href="#">
  <span aria-hidden="true">🔓</span>
  <span class="sr-only">Accessible label</span>
</a>`

const InlinedLinksSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Inlined</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedLinkSemanticAtomComponent id='inlinedLinkSemantic' data-case='text' accessibleLabel='Accessible label' visibleLabel='Visible label' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <InlinedLinkSemanticAtomComponent id='inlinedLinkSemantic' data-case='emoji' accessibleLabel='Accessible label' visibleLabel='🔓' />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { InlinedLinksSemanticMoleculeComponent }
