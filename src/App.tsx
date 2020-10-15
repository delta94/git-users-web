import React, { useEffect, useState } from 'react';
import User from './components/User';
import ResponseProps from './interfaces/ResponseProps';
import api from './services/api';
import GlobalStyle from './styles/global';

import { Container, Input, BoxInputButton, Button, ContainerUser } from './styles/app';

function App() {
  const [users, setUsers] = useState<ResponseProps[]>([]);
  const [search, setSearch] = useState('');
  const [deletedUsers, setDeletedUsers] = useState<ResponseProps[]>([]);
  const [seeDeleted, setSeeleted] = useState(false);

  useEffect(() => {
    (async function getUsers() {
      const response = await api.get('/users');

      const allUsers:ResponseProps[]  = await Promise.all(
        response.data.slice(0, 10).map(async (user: ResponseProps) => {
          const responseData = await api.get(`/users/${user.login}`);
          return responseData.data;
        })
      );

      setUsers(allUsers);
    })();
  }, []);

  const handleSeeDeleted = () => {
    if (!seeDeleted) {
      setSeeleted(true);
    } else {
      setSeeleted(false);
    }
  };

  const filterResults = React.useCallback(
    (user) => {
      if (
        !search ||
        user?.login?.includes(search) ||
        String(user.id) === search
      ) {
        return true;
      }

      return false;
    },
    [search]
  );

  return (
    <Container>
      <GlobalStyle />
      <BoxInputButton>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={handleSeeDeleted} type="submit">
          {!seeDeleted ? 'Apagados' : 'Ativos'}
        </Button>
      </BoxInputButton>

      <ContainerUser>
        {(seeDeleted ? deletedUsers : users)
          .filter(filterResults)
          .map((user) => (
            <User
              key={user.login ?? Date.now()}
              user={user}
              login={user.login}
              setUsers={setUsers}
              setDeletedUsers={setDeletedUsers}
              users={users}
              deletedUsers={deletedUsers}
              isDeleted={seeDeleted}
            />
          ))}
      </ContainerUser>
    </Container>
  );
}

export default App;
