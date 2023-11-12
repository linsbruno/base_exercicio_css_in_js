import styled from 'styled-components'

export const ListaVagasContainer = styled.div`
  margin-top: 40px;
`

export const VagasGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
