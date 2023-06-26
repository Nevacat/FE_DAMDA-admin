import { UserHistoryData } from './user';

export interface ManagerHistoryRes {
  data: {
    content: ManagerHistoryData[];
    total: number;
    first: boolean;
    last: boolean;
  };
}

export interface ManagerHistoryData extends UserHistoryData {}

export interface ManagerRegionRequest {
  id: number;
  region: { 서울특별시?: string[]; 경기도?: string[] };
}
