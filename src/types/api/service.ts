export interface ServiceRes {
  data: {
    content: ServiceData[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
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
  before: {
    id: number;
    imgUrl: string;
  }[];
  after: {
    id: number;
    imgUrl: string;
  }[];
}
