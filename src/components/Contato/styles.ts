import styled from 'styled-components'

export const Contato = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px; /* Espaçamento entre os itens */

    strong {
      font-size: 1.2em;
      color: #333;
    }

    span {
      font-size: 1em;
      color: #666;
    }
  }

  .edit-form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    width: 100%; /* Garantir que o form ocupe todo o espaço disponível */

    input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      background-color: #fff;
      transition: border-color 0.2s ease-in-out;

      &:focus {
        outline: none;
        border-color: #065a60;
      }
    }

    button {
      padding: 8px 16px;
      background-color: #065a60;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #053e42;
      }

      &.cancel {
        background-color: #ccc;

        &:hover {
          background-color: #999;
        }
      }
    }
  }

  .actions {
    display: flex;
    gap: 10px;

    button {
      padding: 8px 16px;
      font-size: 0.9em;
      cursor: pointer;
      background-color: #065a60;
      color: #fff;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #053e42;
      }

      &.remove {
        background-color: #cc0000;

        &:hover {
          background-color: #ad0000;
        }
      }
    }
  }
`
