import React from "react";

import { ElementVariantWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariant";
import { ElementVariantExampleWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantexample";
import { ElementVariantCodeWrapperAtomComponent } from "../../../../atoms/wrapper/elementvariantcode";
import { FourthLevelTitleSemanticAtomComponent } from "../../../../atoms/semantic/title/fourthlevel";
import { SecondLevelTitleNonSemanticAtomComponent } from "../../../../atoms/nonsemantic/title/secondlevel";

const codeSnippet = "<p>Visible title</p>";

const SecondLevelTitlesNonSemanticMoleculeComponent = () => (
  <ElementVariantWrapperAtomComponent>
    <FourthLevelTitleSemanticAtomComponent>
      Second level
    </FourthLevelTitleSemanticAtomComponent>
    <ElementVariantExampleWrapperAtomComponent>
      <SecondLevelTitleNonSemanticAtomComponent id="secondLevelTitleNonSemantic">
        Visible title
      </SecondLevelTitleNonSemanticAtomComponent>
    </ElementVariantExampleWrapperAtomComponent>
    <ElementVariantCodeWrapperAtomComponent>
      {codeSnippet}
    </ElementVariantCodeWrapperAtomComponent>
  </ElementVariantWrapperAtomComponent>
);

export { SecondLevelTitlesNonSemanticMoleculeComponent };
