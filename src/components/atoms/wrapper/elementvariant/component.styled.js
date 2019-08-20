import styled from 'styled-components'

const StyledElementVariantWrapperAtomComponent = styled.section`
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  > h4, > p {
    padding: .5rem 1rem;
    background-color: #f8f8f8;
  }

  &:last-child { margin-bottom: 0; }
`

export { StyledElementVariantWrapperAtomComponent }
