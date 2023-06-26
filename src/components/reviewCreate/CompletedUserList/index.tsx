import React, { SetStateAction, useEffect } from 'react';
import * as S from './style';
import * as T from '@/styles/common/table.style';
import ModalContainer from '@/components/common/ModalContainer';
import Image from 'next/image';
import { ServiceData, ServiceRes } from '@/types/api/service';
import { UseMutateFunction } from '@tanstack/react-query';
import { StateButton } from '@/styles/common/StateButton';
import Pagination from 'react-js-pagination';
import { PaginationContainer } from '@/components/common/PaginationContainer/style';

interface CompletedUserListType {
  users: ServiceData[];
  page: {
    page: number;
    totalCount: number;
  };
  autoModeOff: () => void;
  getUserList: UseMutateFunction<ServiceRes, unknown, number | undefined>;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  onSelectUser: (reservationId: number) => void;
  onPaging: (page: number) => void;
}

function CompletedUserList({
  users,
  page,
  autoModeOff,
  getUserList,
  setModalOpen,
  onSelectUser,
  onPaging,
}: CompletedUserListType) {
  useEffect(() => {
    getUserList(0);
  }, []);
  return (
    <ModalContainer setIsOpen={setModalOpen}>
      <>
        <S.TopBar>
          <h3>서비스 완료 고객 조회</h3>
          <Image onClick={() => setModalOpen(false)} src={'/icons/close-icon.svg'} alt="닫기" width={24} height={24} />
        </S.TopBar>
        <S.List>
          <S.TableCover>
            <T.Thead>
              <T.Tr>
                <T.Th>사용자 이름</T.Th>
                <T.Th>연락처</T.Th>
                <T.Th>주소</T.Th>
                <T.Th>예약일자</T.Th>
                <T.Th>가격</T.Th>
                <T.Th>소요시간</T.Th>
                <T.Th>매니저매칭</T.Th>
              </T.Tr>
            </T.Thead>
            <T.Tbody>
              {users.map((user) => (
                <T.Tr key={user.reservationId} onClick={() => onSelectUser(user.reservationId)}>
                  <T.Td>{user.name}</T.Td>
                  <T.Td>{user.phoneNumber}</T.Td>
                  <T.Td>{user.address}</T.Td>
                  <T.Td>{user.reservationDate}</T.Td>
                  <T.Td>{user.totalPrice}</T.Td>
                  <T.Td>3</T.Td>
                  <T.Td>
                    {user.managerNames.map((manager, idx) => (
                      <span key={idx} className="manager_name">
                        {manager}
                      </span>
                    ))}
                  </T.Td>
                </T.Tr>
              ))}
            </T.Tbody>
          </S.TableCover>
        </S.List>
        <S.Buttons>
          <StateButton state="blue" onClick={autoModeOff}>
            직접입력
          </StateButton>
          <PaginationContainer>
            <Pagination
              activePage={page.page}
              itemsCountPerPage={4}
              totalItemsCount={page.totalCount}
              hideFirstLastPages={true}
              linkClassPrev="prev"
              linkClassNext="next"
              onChange={onPaging}
            />
          </PaginationContainer>
        </S.Buttons>
      </>
    </ModalContainer>
  );
}

export default CompletedUserList;
