import React from 'react'

import { ThirdLevelTitleSemanticAtomComponent } from '../../../atoms/semantic/title/thirdlevel'
import { FirstLevelTitlesNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/titles/firstlevel'
import { SecondLevelTitlesNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/titles/secondlevel'
import { ThirdLevelTitlesNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/titles/thirdlevel'
import { FourthLevelTitlesNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/titles/fourthlevel'

const TitlesNonSemanticOrganismComponent = () => (
  <section>
    <ThirdLevelTitleSemanticAtomComponent>Titles</ThirdLevelTitleSemanticAtomComponent>
    <FirstLevelTitlesNonSemanticMoleculeComponent />
    <SecondLevelTitlesNonSemanticMoleculeComponent />
    <ThirdLevelTitlesNonSemanticMoleculeComponent />
    <FourthLevelTitlesNonSemanticMoleculeComponent />
  </section>
)

export { TitlesNonSemanticOrganismComponent }
