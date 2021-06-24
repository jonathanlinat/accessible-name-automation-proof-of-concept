import React from "react";
import siteDetails from "./../../../../site-details";

import {
  StyledContainerTemplateComponent,
  StyledGridTemplateComponent,
  StyledParagraphTemplateComponent,
  StyledListTemplateComponent,
  StyledListItemTemplateComponent,
} from "./component.styled";

import { FirstLevelTitleSemanticAtomComponent } from "../../atoms/semantic/title/firstlevel";
import { ContainerSemanticOrganismComponent } from "../../organisms/semantic/container";
import { ContainerNonSemanticOrganismComponent } from "../../organisms/nonsemantic/container";

const ContainerTemplateComponent = () => (
  <StyledContainerTemplateComponent>
    <FirstLevelTitleSemanticAtomComponent>
      {siteDetails.name}
    </FirstLevelTitleSemanticAtomComponent>
    <StyledParagraphTemplateComponent>
      {siteDetails.description}
    </StyledParagraphTemplateComponent>
    <StyledListTemplateComponent>
      {process.env.NODE_ENV !== "development" && (
        <StyledListItemTemplateComponent>
          <a href="./test-report.html">Check out the generated test report</a>
        </StyledListItemTemplateComponent>
      )}
      <StyledListItemTemplateComponent>
        <a href={siteDetails.repositoryUrl}>Check out the source code!</a>
      </StyledListItemTemplateComponent>
    </StyledListTemplateComponent>
    <StyledGridTemplateComponent>
      <ContainerSemanticOrganismComponent />
      <ContainerNonSemanticOrganismComponent />
    </StyledGridTemplateComponent>
  </StyledContainerTemplateComponent>
);

export { ContainerTemplateComponent };
