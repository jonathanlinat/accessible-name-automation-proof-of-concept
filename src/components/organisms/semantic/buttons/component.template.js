import React from 'react'

import { ThirdLevelTitleSemanticAtomComponent } from '../../../atoms/semantic/title/thirdlevel'
import { BasicButtonsSemanticMoleculeComponent } from '../../../molecules/semantic/buttons/basic'
import { LabelledButtonsSemanticMoleculeComponent } from '../../../molecules/semantic/buttons/labelled'
import { InlinedButtonsSemanticMoleculeComponent } from '../../../molecules/semantic/buttons/inlined'

const ButtonsSemanticOrganismComponent = () => (
  <section>
    <ThirdLevelTitleSemanticAtomComponent>Buttons</ThirdLevelTitleSemanticAtomComponent>
    <BasicButtonsSemanticMoleculeComponent />
    <LabelledButtonsSemanticMoleculeComponent />
    <InlinedButtonsSemanticMoleculeComponent />
  </section>
)

export { ButtonsSemanticOrganismComponent }
