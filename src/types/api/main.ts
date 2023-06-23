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
