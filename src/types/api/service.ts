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

export interface CompletedServiceRes {
  data: CompletedServiceData;
}

export interface CompletedServiceData {
  reservationId: number;
  name: string;
  address: string;
  reservationDate: string;
  // before: {
  //   [id: string]: string;
  // };
  // after: {
  //   [id: string]: string;
  // };
  before: {
    id: number;
    image: string;
  }[];
  after: {
    id: number;
    image: string;
  }[];
}
