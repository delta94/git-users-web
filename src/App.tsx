import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import User from './components/User';
import ResponseProps from './interfaces/ResponseProps';
import api from './services/api';

function App() {
  const [users, setUsers] = useState<ResponseProps[]>([]);
  const [searchedUsers, setSearchedUsers] = useState<ResponseProps[]>([]);
  const [search, setSearch] = useState('');
  const [deletedUsers, setDeletedUsers] = useState<ResponseProps[]>([]);
  const [seeDeleted, setSeeleted] = useState(false);

  useEffect(() => {
    (async function getUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
      // setOldUsers(response.data);
    })();
  }, []);

  const handleSeeDeleted = () => {
    if (!seeDeleted) {
      setSeeleted(true);
    } else {
      setSeeleted(false);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    const searchExists = users.filter((user) => user.login.includes(search));


  };

  return (
    <>
      <input value={search} onChange={handleSearch} />
      <button onClick={handleSeeDeleted} type="submit">
        Ver Deletados
      </button>

      {(seeDeleted ? deletedUsers : users).map((user) => (
        <User
          key={user.id}
          userId={user.id}
          nodeId={user.node_id}
          htmlUrl={user.html_url}
          avatarUrl={user.avatar_url}
          login={user.login}
          setUsers={setUsers}
          setDeletedUsers={setDeletedUsers}
          users={users}
          deletedUsers={deletedUsers}
          isDeleted={seeDeleted}
        />
      ))}
    </>
  );
}

export default App;
