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
  createdAt: string;
  best: boolean;
}
