import React, { MouseEvent } from 'react';
import UserProps from '../interfaces/UserProps';

import { Container, Article } from '../styles/components/user';

const User = ({
  userId,
  nodeId,
  htmlUrl,
  avatarUrl,
  login,
  setUsers,
  setDeletedUsers,
  users,
  deletedUsers,
  isDeleted,
}: UserProps) => {
  const handleRemoveUser = (event: MouseEvent) => {
    if (!isDeleted) {
      setUsers(users.filter((user) => user.id !== userId));
      setDeletedUsers([
        ...deletedUsers,
        {
          id: userId,
          node_id: nodeId,
          html_url: htmlUrl,
          avatar_url: avatarUrl,
          login: login,
        },
      ]);
    } else {
      setUsers([
        ...users,
        {
          id: userId,
          node_id: nodeId,
          html_url: htmlUrl,
          avatar_url: avatarUrl,
          login: login,
        },
      ]);

      setDeletedUsers(deletedUsers.filter((deletedUser) => deletedUser.id !== userId));
    }
  };

  return (
    <Container>
      <Article>
        <a target="_blank" rel="noopener noreferrer" href={htmlUrl}>
          <p>Login: {login}</p>
        </a>
        <p>Id: {nodeId}</p>
        <p>following</p>
        <p>followers</p>
        <p>UserId: {userId}</p>
        <img src={avatarUrl} alt={login} />
        <button onClick={handleRemoveUser} type="submit">
          Deletar
        </button>
      </Article>
    </Container>
  );
};

export default User;
