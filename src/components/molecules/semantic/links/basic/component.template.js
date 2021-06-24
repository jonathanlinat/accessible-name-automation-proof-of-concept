import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { BasicLinkSemanticAtomComponent } from "../../../../atoms/semantic/link/basic";

const codeSnippetCaseText = '<a href="#">Visible label</a>';
const codeSnippetCaseEmoji = '<a href="#">🔓</a>';

const BasicLinksSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Basic
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicLinkSemanticAtomComponent id="basicLinkSemantic" data-case="text">
        Visible label
      </BasicLinkSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseText}
    </ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <BasicLinkSemanticAtomComponent id="basicLinkSemantic" data-case="emoji">
        🔓
      </BasicLinkSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseEmoji}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { BasicLinksSemanticMoleculeComponent };
