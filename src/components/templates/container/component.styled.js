import styled from "styled-components";

const StyledContainerTemplateComponent = styled.article`
  padding: 1rem;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledGridTemplateComponent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledParagraphTemplateComponent = styled.p`
  line-height: 1.6;
`;

const StyledListTemplateComponent = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledListItemTemplateComponent = styled.li`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export {
  StyledContainerTemplateComponent,
  StyledGridTemplateComponent,
  StyledParagraphTemplateComponent,
  StyledListTemplateComponent,
  StyledListItemTemplateComponent,
};
