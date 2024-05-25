import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import Contato from '../components/Contato'
import * as S from './styles'
import {
  adicionar,
  editar,
  remover,
  Contato as ContatoType
} from '../store/reducers/contatos'

const Contatos = () => {
  const contatos = useSelector((state: RootState) => state.contatos.itens)
  const dispatch = useDispatch()

  const [novoContato, setNovoContato] = useState<ContatoType>({
    id: 0,
    nome: '',
    email: '',
    telefone: ''
  })

  // Ordenar os contatos por nome
  const sortedContatos = contatos
    .slice()
    .sort((a, b) => (a.nome > b.nome ? 1 : -1))

  const handleAdd = () => {
    const contatoParaAdicionar: ContatoType = {
      ...novoContato,
      id: Date.now()
    }
    dispatch(adicionar(contatoParaAdicionar))
    setNovoContato({ id: 0, nome: '', email: '', telefone: '' }) // Limpar os campos
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'telefone') {
      // Limitar o número de dígitos do telefone para 11
      const formattedValue = value.slice(0, 11)
      setNovoContato({ ...novoContato, [name]: formattedValue })
    } else {
      setNovoContato({ ...novoContato, [name]: value })
    }
  }

  const handleEditSubmit = (contato: ContatoType) => {
    dispatch(editar(contato))
  }

  const handleRemove = (id: number) => {
    dispatch(remover(id))
  }

  return (
    <S.Container>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAdd()
        }}
      >
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoContato.nome}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={novoContato.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={novoContato.telefone}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar Contato</button>
      </form>
      <ul>
        {sortedContatos.map((contato) => (
          <Contato
            key={contato.id}
            contato={contato}
            onEdit={handleEditSubmit}
            onRemove={() => handleRemove(contato.id)}
          />
        ))}
      </ul>
    </S.Container>
  )
}

export default Contatos
