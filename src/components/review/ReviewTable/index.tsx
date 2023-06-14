import React from 'react';
import * as T from '@/styles/common/table.style';
import ReviewItem from './ReviewItem';

function ReviewTable() {
  return (
    <T.TableContainer>
      <T.Table>
        <T.Thead>
          <T.Tr>
            <T.Th>순번</T.Th>
            <T.Th>이름</T.Th>
            <T.Th>주소</T.Th>
            <T.Th>내용</T.Th>
            <T.Th>작성일자</T.Th>
            <T.Th>구분</T.Th>
            <T.Th>action</T.Th>
          </T.Tr>
        </T.Thead>
        <T.Tbody>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </T.Tbody>
      </T.Table>
    </T.TableContainer>
  );
}

export default ReviewTable;
