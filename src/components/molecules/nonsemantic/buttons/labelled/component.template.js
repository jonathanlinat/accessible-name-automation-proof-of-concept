import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { LabelledButtonNonSemanticAtomComponent } from "../../../../atoms/nonsemantic/button/labelled";

const codeSnippetCaseText =
  '<div tabindex="0" aria-label="Accessible label">Visible label</div>';
const codeSnippetCaseEmoji =
  '<div tabindex="0" aria-label="Accessible label">🔓</div>';

const LabelledButtonsNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Labelled
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledButtonNonSemanticAtomComponent
        id="labelledButtonNonSemantic"
        data-case="text"
        accessibleLabel="Accessible label"
        visibleLabel="Visible label"
      />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseText}
    </ElementVariantCodeWrapperAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <LabelledButtonNonSemanticAtomComponent
        id="labelledButtonNonSemantic"
        data-case="emoji"
        accessibleLabel="Accessible label"
        visibleLabel="🔓"
        variant="third"
      />
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippetCaseEmoji}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { LabelledButtonsNonSemanticMoleculeComponent };
