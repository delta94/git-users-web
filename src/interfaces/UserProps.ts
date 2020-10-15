import { Dispatch, SetStateAction } from 'react';
import ResponseProps from './ResponseProps';

type UserProps = {
  userId: string;
  nodeId: string;
  htmlUrl: string;
  avatarUrl: string;
  login: string;
  setUsers: Dispatch<SetStateAction<ResponseProps[]>>
  setDeletedUsers: Dispatch<SetStateAction<ResponseProps[]>>
  users: ResponseProps[];
  deletedUsers: ResponseProps[];
  isDeleted: boolean;
};

export default UserProps;
