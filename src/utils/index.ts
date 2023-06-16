import { QuestionIdentifier } from '@/types/api/form';

export const convertIdentifierToKorean = (identifier: QuestionIdentifier) => {
  switch (identifier) {
    case 'AFEWSERVINGS':
      return '인분';
    default:
      return '몰루';
  }
};
