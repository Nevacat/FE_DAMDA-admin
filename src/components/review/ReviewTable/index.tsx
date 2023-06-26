import React from 'react';
import * as T from '@/styles/common/table.style';
import ReviewItem from '../ReviewItem';
import { ReviewData } from '@/types/api/review';

interface ReviewTableProps {
  reviews: ReviewData[];
}

function ReviewTable({ reviews }: ReviewTableProps) {
  return (
    <T.TableContainer>
      <T.Table>
        <colgroup>
          <col width="5%" />
          <col width="15%" />
          <col width="15%" />
          <col width="30%" />
          <col width="15%" />
          <col width="10%" />
        </colgroup>
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
          {reviews.length > 0 ? (
            reviews.map((review) => <ReviewItem key={review.reviewId} review={review} />)
          ) : (
            <tr>
              <td
                colSpan={6}
                style={{
                  textAlign: 'center',
                  lineHeight: 5,
                }}
              >
                등록 된 리뷰가 없습니다.
              </td>
            </tr>
          )}
        </T.Tbody>
      </T.Table>
    </T.TableContainer>
  );
}

export default ReviewTable;
