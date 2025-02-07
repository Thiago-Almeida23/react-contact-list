import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 0;

  form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      flex: 1;
    }

    button {
      padding: 10px 20px;
      background-color: #065a60;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #053e42;
      }
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }
`

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

    strong {
      font-size: 1.2em;
      color: #333;
    }

    span {
      font-size: 1em;
      color: #666;
      margin-top: 5px;
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
