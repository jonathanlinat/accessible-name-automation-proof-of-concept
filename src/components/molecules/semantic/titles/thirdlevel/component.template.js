import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { ThirdLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/thirdlevel";

const codeSnippet = "<h3>Visible title</h3>";

const ThirdLevelTitlesSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Third level
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <ThirdLevelTitleSemanticAtomComponent id="thirdLevelTitleSemantic">
        Visible title
      </ThirdLevelTitleSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippet}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { ThirdLevelTitlesSemanticMoleculeComponent };
