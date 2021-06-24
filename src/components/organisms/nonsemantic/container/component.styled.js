import styled from "styled-components";

const StyledContainerNonSemanticOrganismComponent = styled.section`
  padding: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: white;

  > h2 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
  }

  > * {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export { StyledContainerNonSemanticOrganismComponent };
