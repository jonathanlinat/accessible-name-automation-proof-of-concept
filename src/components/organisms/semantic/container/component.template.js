import React from "react";

import { StyledContainerSemanticOrganismComponent } from "./component.styled";

import { SecondLevelTitleSemanticAtomComponent } from "../../../atoms/semantic/title/secondlevel";
import { ButtonsSemanticOrganismComponent } from "../buttons";
import { LinksSemanticOrganismComponent } from "../links";
import { TitlesSemanticOrganismComponent } from "../titles";

const ContainerSemanticOrganismComponent = () => (
  <StyledContainerSemanticOrganismComponent>
    <SecondLevelTitleSemanticAtomComponent>
      Semantic components
    </SecondLevelTitleSemanticAtomComponent>
    <ButtonsSemanticOrganismComponent />
    <LinksSemanticOrganismComponent />
    <TitlesSemanticOrganismComponent />
  </StyledContainerSemanticOrganismComponent>
);

export { ContainerSemanticOrganismComponent };
