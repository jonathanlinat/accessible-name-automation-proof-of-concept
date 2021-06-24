import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { FirstLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/firstlevel";

const codeSnippet = "<h1>Visible title</h1>";

const FirstLevelTitlesSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      First level
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <FirstLevelTitleSemanticAtomComponent id="firstLevelTitleSemantic">
        Visible title
      </FirstLevelTitleSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippet}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { FirstLevelTitlesSemanticMoleculeComponent };
