import { ServiceStateType } from '../serviceState';

export interface MainData {
  data: any;
  statistical: Statistical;
  content: Reservation[];
  first: boolean;
  last: boolean;
  total: number;
}

export interface Statistical {
  matching: number;
  waiting: number;
  confirmation: number;
  completed: number;
  cancellation: number;
}

type PayMentStatus = 'NOT_PAID_FOR_ANYTHING' | 'PAYMENT_COMPLETED';

export interface Reservation {
  id: number;
  createdAt: string;
  name: string;
  phoneNumber: string;
  address: string;
  totalPrice: number;
  estimate: string;
  manageAmount: number;
  reservationDate: string;
  managerNames: string[];
  reservationStatus: ServiceStateType;
  payMentStatus: PayMentStatus;
}

type MatchingStatus = 'WAITING' | 'YES' | 'NO';

export enum MatchingStatusEnum {
  WAITING = '응답 대기',
  YES = '가능',
  NO = '불가',
}

type Certificate = 'FIRST_RATE_OFF' | 'FIRST_RATE_ON' | 'SECOND_RATE_OFF' | 'SECOND_RATE_ON' | 'NONE' | 'ETC';

export const CertificateEnum = {
  FIRST_RATE_OFF: '1급',
  FIRST_RATE_ON: '1급',
  SECOND_RATE_OFF: '2급',
  SECOND_RATE_ON: '2급',
  NONE: '없음',
  ETC: '기타',
};

export interface Matching {
  map(arg0: (item: any) => import('react').JSX.Element): import('react').ReactNode;
  data: MatchingData[];
}

export interface MatchingData {
  map(arg0: (item: MatchingData) => import('react').JSX.Element): import('react').ReactNode;
  data: any;
  matchId: number;
  managerId: number;
  matchingResponse: MatchingStatus;
  updateAt: string;
  name: string;
  phone: string;
  address: null;
  activityArea: string[];
  certificate: Certificate;
  driving: boolean;
  matching: boolean;
  level: number;
}
