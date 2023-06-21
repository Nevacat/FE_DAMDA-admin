import { getUserList } from '@/api/user';
import History from '@/components/common/History';
import UserLayout from '@/components/user/UserLayout';
import { UserListRes } from '@/types/api/user';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';

interface UserContextProp {
  OpenHistory: (userId: number, username: string) => void;
  userList: UserListRes | undefined;
}

export const UserContext = createContext<UserContextProp | null>(null);

function UserPage() {
  const { data: userList } = useQuery(['user'], () => getUserList(undefined), {});
  const [clickedUsername, setClickedUsername] = useState('');
  const [clickedUserId, setClickedUserId] = useState(0);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [userListPage, setUserListPage] = useState({ page: 1, totalCount: 10 });

  const OpenHistory = (memberId: number, username: string) => {
    setClickedUsername(username);
    setClickedUserId(memberId);
    setIsHistoryOpen(true);
  };

  const onUserListPaging = (page: number) => {
    setUserListPage({ ...userListPage, page });
  };

  return (
    <UserContext.Provider
      value={{
        OpenHistory,
        userList,
      }}
    >
      <UserLayout page={userListPage} onPaging={onUserListPaging} />
      {isHistoryOpen && (
        <History type={'MEMBER'} username={clickedUsername} memberId={clickedUserId} setIsOpen={setIsHistoryOpen} />
      )}
    </UserContext.Provider>
  );
}

export default UserPage;
