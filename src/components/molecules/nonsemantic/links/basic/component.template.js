import React from 'react'

import { ElementVariantWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariant'
import { ElementVariantExampleWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantexample'
import { ElementVariantCodeWrapperAtomComponent } from '../../../../atoms/wrapper/elementvariantcode'
import { FourthLevelTitleSemanticAtomComponent } from '../../../../atoms/semantic/title/fourthlevel'
import { BasicLinkNonSemanticAtomComponent } from '../../../../atoms/nonsemantic/link/basic'

const codeSnippetCaseText = '<span tabindex="0">Visible label</span>'
const codeSnippetCaseEmoji = '<span tabindex="0">🔓</span>'

const BasicLinksNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>Basic</FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicLinkNonSemanticAtomComponent id='basicLinkNonSemantic' data-case='text'>Visible label</BasicLinkNonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseText}</ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicLinkNonSemanticAtomComponent id='basicLinkNonSemantic' data-case='emoji'>🔓</BasicLinkNonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>{codeSnippetCaseEmoji}</ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
)

export { BasicLinksNonSemanticMoleculeComponent }
