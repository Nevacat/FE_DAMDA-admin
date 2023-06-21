import { ServiceStateType } from '../serviceState';

export interface UserListRes {
  data: {
    content: UserData[];
    total: number;
    first: boolean;
    last: boolean;
  };
}

export interface UserData {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  reservationStatus: ServiceStateType;
  createdAt: string;
  memo: string;
  code: string;
}

export interface UserHistoryRes {
  data: {
    content: UserHistoryData[];
    first: boolean;
    last: boolean;
    total: number;
  };
}

export interface UserHistoryData {
  id: number;
  createdAt: string;
}

export interface ReservationFormDetailRes {
  data: ReservationFormDetailData;
}

export interface ReservationFormDetailData {
  applicantName: string;
  applicantContactInfo: string;
  address: string;
  serviceDuration: string;
  serviceDate: string;
  parkingAvailable: string;
  reservationNote: string;
  reservationRequest: string;
  reservationEnter: string;
  discountCode: string;
  learnedRoute: string;
  afewServings: string;
}
