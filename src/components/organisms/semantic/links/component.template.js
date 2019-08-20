import React from 'react'

import { ThirdLevelTitleSemanticAtomComponent } from '../../../atoms/semantic/title/thirdlevel'
import { BasicLinksSemanticMoleculeComponent } from '../../../molecules/semantic/links/basic'
import { LabelledLinksSemanticMoleculeComponent } from '../../../molecules/semantic/links/labelled'
import { InlinedLinksSemanticMoleculeComponent } from '../../../molecules/semantic/links/inlined'

const LinksSemanticOrganismComponent = () => (
  <section>
    <ThirdLevelTitleSemanticAtomComponent>Links</ThirdLevelTitleSemanticAtomComponent>
    <BasicLinksSemanticMoleculeComponent />
    <LabelledLinksSemanticMoleculeComponent />
    <InlinedLinksSemanticMoleculeComponent />
  </section>
)

export { LinksSemanticOrganismComponent }
