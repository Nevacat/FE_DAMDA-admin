import { getUserList, modifyMemo } from '@/api/user';
import History from '@/components/common/History';
import EditMemo from '@/components/user/EditMemo';
import UserLayout from '@/components/user/UserLayout';
import { DummyUsers } from '@/constants/DummyUsers';
import { UserListData, UserListRes } from '@/types/api/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { createContext, useEffect, useState } from 'react';

interface UserContextProp {
  OpenHistory: (userId: number, username: string) => void;
  openMemoEditer: (memberId: number, memo: string) => void;
  userList: UserListData[] | undefined;
}

export const UserContext = createContext<UserContextProp | null>(null);

function UserPage() {
  const [userList, setUserList] = useState<UserListData[]>([]);
  const [savedSearchInput, setSavedSearchInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [clickedUsername, setClickedUsername] = useState('');
  const [clickedUserId, setClickedUserId] = useState(0);
  const [clickedUserMemo, setClickedUserMemo] = useState('');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [userListPage, setUserListPage] = useState({ page: 1, totalCount: 10 });
  // const { mutate: userListMutate } = useMutation((params: { page: number; search: string }) => getUserList(params), {
  //   onSuccess: (data) => {
  //     const currentData = data.data;
  //     setUserList(currentData.content);
  //   },
  // });

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput === savedSearchInput) return;
    setSavedSearchInput(searchInput);
    // userListMutate({ page: userListPage.page - 1, search: searchInput });
  };

  const OpenHistory = (memberId: number, username: string) => {
    setClickedUsername(username);
    setClickedUserId(memberId);
    setIsHistoryOpen(true);
  };

  const openMemoEditer = (memberId: number, memo: string) => {
    setClickedUserId(memberId);
    setClickedUserMemo(memo);
    setIsMemoOpen(true);
  };

  const onConfirmEditMemo = async (id: number, memo: string) => {
    if (clickedUserMemo === memo) {
      alert('변경사항이 없습니다.');
      return setIsMemoOpen(false);
    } else {
      // await modifyMemo(id, memo.trim());
      // userListMutate({ page: userListPage.page - 1, search: savedSearchInput });
      return setIsMemoOpen(false);
    }
  };

  const onUserListPaging = (page: number) => {
    setUserListPage({ ...userListPage, page });
    // userListMutate({ page: page - 1, search: savedSearchInput });
  };

  useEffect(() => {
    // userListMutate({ page: userListPage.page - 1, search: savedSearchInput });
    setUserList(DummyUsers);
  }, []);

  return (
    <UserContext.Provider
      value={{
        OpenHistory,
        openMemoEditer,
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
        <History type={'MEMBER'} username={clickedUsername} userId={clickedUserId} setIsOpen={setIsHistoryOpen} />
      )}
      {isMemoOpen && (
        <EditMemo
          userId={clickedUserId}
          memo={clickedUserMemo}
          setIsOpen={setIsMemoOpen}
          onConfirmEditMemo={onConfirmEditMemo}
        />
      )}
    </UserContext.Provider>
  );
}

export default UserPage;
