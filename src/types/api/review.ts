export interface ReviewRes {
  data: ReviewData[];
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
