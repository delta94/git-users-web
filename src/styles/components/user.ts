import styled from 'styled-components'

export const Article = styled.article`
  margin: 1rem;
  padding: 1rem;
  background-color: white;

  img {
    width: 100%;
    max-width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export const BoxFollow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const BoxLogin = styled.a`
  margin-bottom: 1rem;
  display: inline-block;
  text-decoration: none;
  line-height: .5rem;
  padding: .5rem 1rem;
  border-radius: .2rem;
  font-weight: bold;
  color: #686d76;
  background-color: lightgray;
  transition: opacity 500ms;

  &:hover {
    opacity: 0.5;
  }
`;

export const BoxButton = styled.button `
  display: block;
  height: 2.5rem;
  border: 0;
  width: 100%;
  color: #686d76;
  border-radius: .5rem;
  margin: 1rem auto;
  font-weight: bold;
  background-color: lightgray;
  cursor: pointer;
`;

export const Box = styled.div`
  margin-bottom: 1rem;
  color: #686d76;

  span {
    background-color: lightgray;
    padding: 0 .2rem;
    font-weight: bold;
    border-radius: .2rem;

  }

`;
