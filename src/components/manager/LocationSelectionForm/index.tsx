import React, { ChangeEvent, RefObject, createRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { citiesData } from '@/constants/locationData';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import * as S from './style';

function LocationSelectionForm() {
  const [isLocationOptionsOpen, setIsLocationOptionsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const listRef: RefObject<HTMLDivElement> = createRef();
  const [activityRegion, setActivityRegion] = useState({ 서울특별시: [], 경기도: [] });

  const regionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRegion(e.target.value);
  };

  const closeHandler = (e: MouseEvent) => {
    if (isLocationOptionsOpen && listRef.current && !listRef.current.contains(e.target as Node)) {
      setIsLocationOptionsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeHandler);

    return () => {
      window.removeEventListener('click', closeHandler);
    };
  });

  const cityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const district = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      if (selectedRegion === '서울특별시') {
        // 매니저 활동 지역 추가 api 요청
      } else if (selectedRegion === '경기도') {
        // 매니저 활동 지역 삭제 api 요청
      }
    } else {
      if (selectedRegion === '서울특별시') {
        setActivityRegion((prev) => ({
          ...prev,
          서울특별시: prev.서울특별시.filter((item) => item !== district),
        }));
      } else if (selectedRegion === '경기도') {
        setActivityRegion((prev) => ({
          ...prev,
          경기도: prev.경기도.filter((item) => item !== district),
        }));
      }
    }
  };

  const filterTagHandler = (districtItem: string) => {
    // setRemoveTag(districtItem);
    // if (activityRegion.서울특별시.includes(districtItem)) {
    //   setActivityRegion((prev) => ({
    //     ...prev,
    //     서울특별시: prev.서울특별시.filter((item) => item !== districtItem),
    //   }));
    // }
    // if (activityRegion.경기도.includes(districtItem)) {
    //   setActivityRegion((prev) => ({
    //     ...prev,
    //     경기도: prev.경기도.filter((item) => item !== districtItem),
    //   }));
    // }
  };

  // 지역 태그
  const seoul = activityRegion.서울특별시.map((item, index) => (
    <div key={index}>
      서울 {item}
      <button type="button" onClick={() => filterTagHandler(item)}>
        <Image src="/icons/tag-close-icon.svg" alt="tag-close-icon" width={10.5} height={10.5} />
      </button>
    </div>
  ));

  const gyeonggi = activityRegion.경기도.map((item, index) => (
    <div key={index}>
      경기 {item}
      <button type="button" onClick={() => filterTagHandler(item)}>
        <Image src="/icons/tag-close-icon.svg" alt="tag-close-icon" width={10.5} height={10.5} />
      </button>
    </div>
  ));

  return (
    <S.LocationSelectionForm>
      {/* 지역 태그 */}
      <S.SelectedLocation>
        {seoul}
        {gyeonggi}
      </S.SelectedLocation>

      <div style={{ position: 'relative' }}>
        {/* Select Button */}
        <S.SelectButton
          type="button"
          region={selectedRegion}
          isOptionsOpen={isLocationOptionsOpen}
          onClick={(e) => {
            e.stopPropagation();
            setIsLocationOptionsOpen(!isLocationOptionsOpen);
          }}
        >
          <div className="select-region">
            지역 선택
            {isLocationOptionsOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>

          <div className="select-detail">
            <span>{selectedRegion === '서울특별시' ? '서울특별시' : '경기도'}</span>

            <span>
              세부 선택
              <BsChevronUp />
            </span>
          </div>
        </S.SelectButton>

        {/* Options */}
        {isLocationOptionsOpen && (
          <S.ListWrapper ref={listRef}>
            <ul>
              <li>
                <input
                  type="radio"
                  name="manager_available_region"
                  id="seoul"
                  value="서울특별시"
                  onChange={regionChangeHandler}
                />
                <label htmlFor="seoul">서울특별시</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="manager_available_region"
                  id="gyeonggi"
                  value="경기도"
                  onChange={regionChangeHandler}
                />
                <label htmlFor="gyeonggi">경기도</label>
              </li>
            </ul>

            {isLocationOptionsOpen && selectedRegion && citiesData[selectedRegion] && (
              <ul>
                {citiesData[selectedRegion].map((district: string) => (
                  <li key={district}>
                    <input
                      type="checkbox"
                      name="manager_available_district"
                      id={district}
                      value={district}
                      // checked={activityRegion[selectedRegion].includes(district)}
                      onChange={cityChangeHandler}
                    />
                    <label htmlFor={district}>{district}</label>
                  </li>
                ))}
              </ul>
            )}
          </S.ListWrapper>
        )}
      </div>
    </S.LocationSelectionForm>
  );
}

export default LocationSelectionForm;
