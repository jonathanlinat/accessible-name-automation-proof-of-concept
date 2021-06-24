import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { LabelledLinkSemanticAtomComponent } from "../../../../atoms/semantic/link/labelled";

const codeSnippetCaseText =
  '<a href="#" aria-label="Accessible label">Visible label</a>';
const codeSnippetCaseEmoji = '<a href="#" aria-label="Accessible label">🔓</a>';

const LabelledLinksSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Labelled
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledLinkSemanticAtomComponent
        id="labelledLinkSemantic"
        data-case="text"
        accessibleLabel="Accessible label"
        visibleLabel="Visible label"
      />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseText}
    </ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledLinkSemanticAtomComponent
        id="labelledLinkSemantic"
        data-case="emoji"
        accessibleLabel="Accessible label"
        visibleLabel="🔓"
      />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseEmoji}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { LabelledLinksSemanticMoleculeComponent };
