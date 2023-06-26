import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFilterProps {
  date: { startDate: Date | null; endDate: Date | null };
  setDate: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

function DateFilter({ date, setDate }: DateFilterProps) {
  const { startDate, endDate } = date;

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDate({ startDate: start, endDate: end });
  };

  return (
    <>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </>
  );
}

export default DateFilter;
