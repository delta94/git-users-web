import React from 'react';
import UserProps from '../interfaces/UserProps';

import {
  Article,
} from '../styles/components/user';
import Button from './Button';
import Followers from './Followers';
import Following from './Following';
import Id from './Id';
import Login from './Login';
import NodeId from './NodeId';

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
    <Article>
      <Login login={login} htmlUrl={user.html_url} />
      <Id id={user.id} />
      <NodeId nodeId={user.node_id} />
      <Followers followers={user.followers} />
      <Following following={user.following} />
      <img src={user.avatar_url} alt={login} />
      <Button title="Deletar" handleRemoveUser={handleRemoveUser}  />
    </Article>
  );
};

export default User;
