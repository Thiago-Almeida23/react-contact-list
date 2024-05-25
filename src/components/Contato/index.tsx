import React, { useState } from 'react'
import { Contato as ContatoType } from '../../store/reducers/contatos'
import * as S from './styles'

type Props = {
  contato: ContatoType
  onEdit: (contato: ContatoType) => void
  onRemove: () => void
  setEditingContato?: ((contato: ContatoType | null) => void) | undefined
}

const Contato = ({ contato, onEdit, onRemove, setEditingContato }: Props) => {
  const [editing, setEditing] = useState(false)
  const [editedContato, setEditedContato] = useState<ContatoType>(contato)

  const handleEdit = () => {
    setEditing(true)
    if (setEditingContato) {
      setEditingContato(contato)
    }
  }

  const handleSave = () => {
    onEdit(editedContato)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditedContato(contato)
    setEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedContato({ ...editedContato, [name]: value })
  }

  const formatPhoneNumber = (phoneNumber: string) => {
    const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return phoneNumber
  }

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    value = value.replace(/\D/g, '') // Remove tudo o que não for dígito
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
    value = value.replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen entre o quarto e o quinto dígitos
    setEditedContato({ ...editedContato, telefone: value })
  }

  return (
    <S.Contato>
      <div className="info">
        {editing ? (
          <div className="edit-form">
            <input
              type="text"
              name="nome"
              value={editedContato.nome}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              value={editedContato.email}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="telefone"
              value={formatPhoneNumber(editedContato.telefone)}
              placeholder="(00) 00000-0000"
              onChange={(e) => handleTelefoneChange(e)}
            />
            <button type="button" onClick={handleSave}>
              Salvar
            </button>
            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        ) : (
          <>
            <strong>{contato.nome}</strong>
            <span>{contato.email}</span>
            <span>{formatPhoneNumber(contato.telefone)}</span>
          </>
        )}
      </div>
      <div className="actions">
        {!editing && (
          <>
            <button onClick={handleEdit}>Editar</button>
            <button className="remove" onClick={onRemove}>
              Remover
            </button>
          </>
        )}
      </div>
    </S.Contato>
  )
}

export default Contato
