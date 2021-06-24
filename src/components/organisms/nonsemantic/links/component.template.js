import React from "react";

import { ThirdLevelTitleSemanticAtomComponent } from "../../../atoms/semantic/title/thirdlevel";
import { BasicLinksNonSemanticMoleculeComponent } from "../../../molecules/nonsemantic/links/basic";
import { LabelledLinksNonSemanticMoleculeComponent } from "../../../molecules/nonsemantic/links/labelled";
import { InlinedLinksNonSemanticMoleculeComponent } from "../../../molecules/nonsemantic/links/inlined";

const LinksNonSemanticOrganismComponent = () => (
  <section>
    <ThirdLevelTitleSemanticAtomComponent>
      Links
    </ThirdLevelTitleSemanticAtomComponent>
    <BasicLinksNonSemanticMoleculeComponent />
    <LabelledLinksNonSemanticMoleculeComponent />
    <InlinedLinksNonSemanticMoleculeComponent />
  </section>
);

export { LinksNonSemanticOrganismComponent };
