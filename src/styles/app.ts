import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BoxInputButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  margin-top: 1rem;
  width: 80%;
  height: 2.5rem;
  background-color: #95989e;
  border: 0;
  border-radius: 2rem;
  color: white;
  outline: 0;
`

export const Button = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  height: 2.5rem;
  padding: 0 2.5rem;
  background-color: #686d76;
  color: white;
  border: 0;
  border-radius: 2rem;
  font-weight: bold;
  outline: 0;
`

export const ContainerUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
