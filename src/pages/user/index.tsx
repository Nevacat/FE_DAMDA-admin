import { getUserList } from '@/api/user';
import History from '@/components/common/History';
import UserLayout from '@/components/user/UserLayout';
import { UserListData, UserListRes } from '@/types/api/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { createContext, useEffect, useState } from 'react';

interface UserContextProp {
  OpenHistory: (userId: number, username: string) => void;
  userList: UserListData[] | undefined;
}

export const UserContext = createContext<UserContextProp | null>(null);

function UserPage() {
  const [userList, setUserList] = useState<UserListData[]>([]);
  const [clickedUsername, setClickedUsername] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [clickedUserId, setClickedUserId] = useState(0);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [userListPage, setUserListPage] = useState({ page: 1, totalCount: 10 });
  const { mutate: userListMutate } = useMutation((searchInput: string | undefined) => getUserList(searchInput), {
    onSuccess: (data) => {
      const currentData = data.data;
      setUserList(currentData.content);
    },
  });

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    userListMutate(searchInput);
  };

  const OpenHistory = (memberId: number, username: string) => {
    setClickedUsername(username);
    setClickedUserId(memberId);
    setIsHistoryOpen(true);
  };

  const onUserListPaging = (page: number) => {
    setUserListPage({ ...userListPage, page });
  };

  useEffect(() => {
    userListMutate(undefined);
  }, []);

  return (
    <UserContext.Provider
      value={{
        OpenHistory,
        userList,
      }}
    >
      <UserLayout
        page={userListPage}
        searchInput={searchInput}
        onChangeInput={onChangeSearchInput}
        onSubmitSearch={onSubmitSearch}
        onPaging={onUserListPaging}
      />

      {isHistoryOpen && (
        <History type={'MEMBER'} username={clickedUsername} memberId={clickedUserId} setIsOpen={setIsHistoryOpen} />
      )}
    </UserContext.Provider>
  );
}

export default UserPage;
