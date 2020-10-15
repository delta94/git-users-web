import React from 'react';
import UserProps from '../interfaces/UserProps';

import { Container, Article } from '../styles/components/user';

const User = ({
  user,
  login,
  setUsers,
  setDeletedUsers,
  users,
  deletedUsers,
  isDeleted,
}: UserProps) => {
  const handleRemoveUser = () => {
    if (!isDeleted) {
      setUsers(users.filter((userFilter) => userFilter.id !== user.id));
      setDeletedUsers([...deletedUsers, user]);
    } else {
      setUsers([...users, user]);
      setDeletedUsers(
        deletedUsers.filter((deletedUser) => deletedUser.id !== user.id)
      );
    }
  };

  return (
    <Container>
      <Article>
        <a target="_blank" rel="noopener noreferrer" href={user.html_url}>
          <p>Login: {login}</p>
        </a>
        <p>Id: {user.id}</p>
        <p>following</p>
        <p>followers</p>
        <p>UserId: {user.node_id}</p>
        <img src={user.avatar_url} alt={login} />
        <button onClick={handleRemoveUser} type="submit">
          Deletar
        </button>
      </Article>
    </Container>
  );
};

export default User;
