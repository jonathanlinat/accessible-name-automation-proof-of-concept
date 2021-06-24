import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";

const ElementVariantCodeWrapperAtomComponent = (props) => (
  <SyntaxHighlighter
    language="html"
    style={ghcolors}
    aria-hidden="true"
    {...props}
  >
    {props.children}
  </SyntaxHighlighter>
);

ElementVariantCodeWrapperAtomComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

export { ElementVariantCodeWrapperAtomComponent };
