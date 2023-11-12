// FormVagas.tsx
import React, { FormEvent, useState } from 'react'
import { FormContainer, PesquisarButton, CampoInput } from './FormVagas.styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <CampoInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <PesquisarButton type="submit">Pesquisar</PesquisarButton>
    </FormContainer>
  )
}

export default FormVagas
