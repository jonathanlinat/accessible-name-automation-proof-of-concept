import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { LabelledLinkNonSemanticAtomComponent } from "../../../../atoms/nonsemantic/link/labelled";

const codeSnippetCaseText =
  '<span tabindex="0" aria-label="Accessible label">Visible label</span>';
const codeSnippetCaseEmoji =
  '<span tabindex="0" aria-label="Accessible label">🔓</span>';

const LabelledLinksNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Labelled
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledLinkNonSemanticAtomComponent
        id="labelledLinkNonSemantic"
        data-case="text"
        accessibleLabel="Accessible label"
        visibleLabel="Visible label"
      />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseText}
    </ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledLinkNonSemanticAtomComponent
        id="labelledLinkNonSemantic"
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

export { LabelledLinksNonSemanticMoleculeComponent };
