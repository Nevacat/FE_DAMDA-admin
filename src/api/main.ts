import { MainData } from '@/types/api/main';
import { instance } from './instance';

export const getSubmitData = async (page: number, startData: string | null, endData: string | null) => {
  const res = await instance.get<MainData>(
    `admin/submit/list?page=${page ?? 0}&startDate=${startData}&endDate=${endData}&sort=asc`,
  );
  console.log(res);
  return res.data;
};
