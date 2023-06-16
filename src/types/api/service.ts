export interface ServiceRes {
  data: {
    content: ServiceData[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    first: boolean;
    size: number;
    numberOfElements: number;
    empty: false;
  };
}

export interface ServiceData {
  reservationId: number;
  name: string;
  phoneNumber: string;
  address: string;
  totalPrice: number;
  reservationDate: string;
  managerNames: string[];
}
