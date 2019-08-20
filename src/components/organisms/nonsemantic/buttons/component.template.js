import React from 'react'

import { ThirdLevelTitleSemanticAtomComponent } from '../../../atoms/semantic/title/thirdlevel'
import { BasicButtonsNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/buttons/basic'
import { LabelledButtonsNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/buttons/labelled'
import { InlinedButtonsNonSemanticMoleculeComponent } from '../../../molecules/nonsemantic/buttons/inlined'

const ButtonsNonSemanticOrganismComponent = () => (
  <section>
    <ThirdLevelTitleSemanticAtomComponent>Buttons</ThirdLevelTitleSemanticAtomComponent>
    <BasicButtonsNonSemanticMoleculeComponent />
    <LabelledButtonsNonSemanticMoleculeComponent />
    <InlinedButtonsNonSemanticMoleculeComponent />
  </section>
)

export { ButtonsNonSemanticOrganismComponent }
