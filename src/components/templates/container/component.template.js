import React from 'react'

import { StyledContainerTemplateComponent } from './component.styled'

import { FirstLevelTitleSemanticAtomComponent } from '../../atoms/semantic/title/firstlevel'
import { ContainerSemanticOrganismComponent } from '../../organisms/semantic/container'
import { ContainerNonSemanticOrganismComponent } from '../../organisms/nonsemantic/container'

const ContainerTemplateComponent = () => (
  <StyledContainerTemplateComponent>
    <FirstLevelTitleSemanticAtomComponent>Accessible Name Automation Proof of Concept</FirstLevelTitleSemanticAtomComponent>
    <section>
      <ContainerSemanticOrganismComponent />
      <ContainerNonSemanticOrganismComponent />
    </section>
  </StyledContainerTemplateComponent>
)

export { ContainerTemplateComponent }
