import React from 'react'

import { ThirdLevelTitleSemanticAtomComponent } from '../../../atoms/semantic/title/thirdlevel'
import { FirstLevelTitlesSemanticMoleculeComponent } from '../../../molecules/semantic/titles/firstlevel'
import { SecondLevelTitlesSemanticMoleculeComponent } from '../../../molecules/semantic/titles/secondlevel'
import { ThirdLevelTitlesSemanticMoleculeComponent } from '../../../molecules/semantic/titles/thirdlevel'
import { FourthLevelTitlesSemanticMoleculeComponent } from '../../../molecules/semantic/titles/fourthlevel'

const TitlesSemanticOrganismComponent = () => (
  <section>
    <ThirdLevelTitleSemanticAtomComponent>Titles</ThirdLevelTitleSemanticAtomComponent>
    <FirstLevelTitlesSemanticMoleculeComponent />
    <SecondLevelTitlesSemanticMoleculeComponent />
    <ThirdLevelTitlesSemanticMoleculeComponent />
    <FourthLevelTitlesSemanticMoleculeComponent />
  </section>
)

export { TitlesSemanticOrganismComponent }
