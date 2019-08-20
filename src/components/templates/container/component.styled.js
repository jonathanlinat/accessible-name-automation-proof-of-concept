import styled from 'styled-components'

const StyledContainerTemplateComponent = styled.article`
  min-width: 303px;
  padding: 1rem;

  > * {
    margin-bottom: 1rem;

    &:last-child { margin-bottom: 0; }
  }

  > section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`

export { StyledContainerTemplateComponent }
