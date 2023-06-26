export interface ReviewRes {
  data: {
    content: ReviewData[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface ReviewData {
  reviewId: number;
  name: string;
  address: string;
  title: string;
  content: string;
  createAt: string;
  best: boolean;
}

export interface ReviewPostReq {
  title: string;
  content: string;
  before?: File[];
  after?: File[];
}
