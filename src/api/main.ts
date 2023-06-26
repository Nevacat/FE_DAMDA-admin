import { MainData } from '@/types/api/main';
import { instance } from './instance';

export const getExcelZipDownload = async () => {
  const res = await instance.get('zip/excel/download',{
    responseType: 'blob',
  });
  console.log(res);
  return res.data;
};

export const getSubmitData = async (page: number, startDate: string | null, endDate: string | null) => {
  let url = `admin/submit/list?page=${page ?? 0}&sort=asc`;

  if (startDate !== null) {
    url += `&startDate=${startDate}`;
  }

  if (endDate !== null) {
    url += `&endDate=${endDate}`;
  }

  const res = await instance.get<MainData>(url);
  console.log(res);
  return res.data;
};

export const putStatusComplete = async (id: number) => {
  const res = await instance.put(`status/completed/${id}`);
  return res.data;
};

export const putStatusCancel = async (id: number) => {
  const res = await instance.put(`status/cancellation/${id}`);
  return res.data;
};
