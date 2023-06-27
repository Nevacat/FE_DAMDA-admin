import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiCalendarEvent } from 'react-icons/bi';
interface DateFilterProps {
  date: { startDate: Date | null; endDate: Date | null };
  setDate: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

function DateFilter({ date, setDate }: DateFilterProps) {
  const { startDate, endDate } = date;
  const Today = new Date();
  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDate({ startDate: start, endDate: end });
  };

  return (
    <>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={Today}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        placeholderText="ALL DATE"
      />
    </>
  );
}

export default DateFilter;
