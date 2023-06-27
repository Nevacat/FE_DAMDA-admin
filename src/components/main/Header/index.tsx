import React from 'react';
import * as S from './style';
import DateFilter from './DateFilter';
import { TbFileDownload } from 'react-icons/tb';
import { getExcelZipDownload } from '@/api/main';
import { formatDate } from '../DateFormat';

interface HeaderProps {
  date: { startDate: Date | null; endDate: Date | null };
  setDate: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

const Header: React.FC<HeaderProps> = ({ date, setDate }) => {
  const onDownload = async () => {
    try {
      const startDateString = date.startDate ? formatDate(date.startDate) : null;
      const endDateString = date.endDate ? formatDate(date.endDate) : null;
      const response = await getExcelZipDownload(startDateString, endDateString);
      const downloadUrl = `${response.baseURL}${response.url}`;
      console.log(response.baseURL, response.url);
      const link = document.createElement('a');
      link.href = downloadUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Failed to download Excel Zip:', error);
    }
  };

  return (
    <S.HeaderContainer>
      <S.HeaderTitle>예약관리</S.HeaderTitle>
      <S.HeaderMenus>
        <DateFilter date={date} setDate={setDate} />
        <S.ExcelDownload onClick={onDownload}>
          <TbFileDownload style={{ fontSize: '18px' }} />
          Download
        </S.ExcelDownload>
      </S.HeaderMenus>
    </S.HeaderContainer>
  );
};

export default Header;
