import { QuestionIdentifier } from '@/types/api/form';

export const convertIdentifierToKorean = (identifier: QuestionIdentifier) => {
  switch (identifier) {
    case 'AFEWSERVINGS':
      return '인분';
    case 'PARKINGAVAILABLE':
      return '주차 가능 위치';
    case 'RESERVATIONENTER':
      return '들어갈 수 있는 곳';
    case 'RESERVATIONNOTE':
      return '요청, 주의사항';
    case 'RESERVATIONREQUEST':
      return '질문사항은 1:1로 답변드립니다. :)';
    case 'LEARNEDROUTE':
      return '알게된 경로';
    default:
      return '몰루';
  }
};
