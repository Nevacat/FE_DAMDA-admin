export interface UserListRes {
  data: UserData[];
}

export interface UserData {
  name: string;
  phoneNumber: string;
  address: string;
  reservationStatus: string;
  createdAt: string;
  memo: string;
  code: string;
}
