import React from "react";

import { ThemeProviderApp } from "../themeprovider";
import { ContainerTemplateComponent } from "../../components/templates/container";

const WrapperApp = (
  <>
    <ThemeProviderApp />
    <ContainerTemplateComponent />
  </>
);

export default WrapperApp;
