import React from 'react'

import { StyledContainerNonSemanticOrganismComponent } from './component.styled'

import { SecondLevelTitleSemanticAtomComponent } from '../../../atoms/semantic/title/secondlevel'
import { ButtonsNonSemanticOrganismComponent } from '../buttons'
import { LinksNonSemanticOrganismComponent } from '../links'
import { TitlesNonSemanticOrganismComponent } from '../titles'

const ContainerNonSemanticOrganismComponent = () => (
  <StyledContainerNonSemanticOrganismComponent>
    <SecondLevelTitleSemanticAtomComponent>Non semantic components</SecondLevelTitleSemanticAtomComponent>
    <ButtonsNonSemanticOrganismComponent />
    <LinksNonSemanticOrganismComponent />
    <TitlesNonSemanticOrganismComponent />
  </StyledContainerNonSemanticOrganismComponent>
)

export { ContainerNonSemanticOrganismComponent }
