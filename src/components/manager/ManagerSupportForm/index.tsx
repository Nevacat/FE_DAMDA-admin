import React from 'react';
import * as S from './style';
import Image from 'next/image';

function ManagerSupportForm() {
  return (
    <S.ManagerSupportForm>
      <header>
        <h2>매니저 지원 폼</h2>
        <Image src="/icons/close-icon.svg" alt="close icon" width={24} height={24} />
      </header>

      <div>
        <S.FormInfo>
          <h3>매니저 정보</h3>

          <dl>
            <div>
              <dt>이름</dt>
              <dd></dd>
            </div>

            <div>
              <dt>연락처</dt>
              <dd></dd>
            </div>

            <div>
              <dt>활동 가능 요일</dt>
              <dd></dd>
            </div>

            <div>
              <dt>활동 가능 지역</dt>
              <dd></dd>
            </div>
          </dl>
        </S.FormInfo>

        <S.FormInfo>
          <h3>경력 정보</h3>

          <dl>
            <div>
              <dt>자격증</dt>
              <dd></dd>
            </div>

            <div>
              <dt>현장 경험</dt>
              <dd className="field-experience"></dd>
            </div>

            <div>
              <dt>본업 유무</dt>
              <dd></dd>
            </div>
          </dl>
        </S.FormInfo>

        <S.FormInfo>
          <h3>추가 정보</h3>

          <dl>
            <div>
              <dt>자차 운전 여부</dt>
              <dd></dd>
            </div>
          </dl>
        </S.FormInfo>
      </div>
    </S.ManagerSupportForm>
  );
}

export default ManagerSupportForm;
