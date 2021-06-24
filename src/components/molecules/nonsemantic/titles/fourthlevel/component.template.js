import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { FourthLevelTitleNonSemanticAtomComponent } from "../../../../atoms/nonsemantic/title/fourthlevel";

const codeSnippet = "<p>Visible title</p>";

const FourthLevelTitlesNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Fourth level
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <FourthLevelTitleNonSemanticAtomComponent id="fourthLevelTitleNonSemantic">
        Visible title
      </FourthLevelTitleNonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippet}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { FourthLevelTitlesNonSemanticMoleculeComponent };
