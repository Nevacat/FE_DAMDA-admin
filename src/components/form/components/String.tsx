import React, { useRef, useState } from 'react';
import { FormInputProps } from '@/types/components/form';
import { FormInputWrapper } from '@/styles/pages/form/form.styled';
import { convertIdentifierToKorean } from '@/utils';
import ChangeButton from '@/components/form/components/ChangeButton';
import TitleEdit from '@/components/form/components/TitleEdit';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';
import { AdminForm } from '@/types/api/form';

function String({ formData, refetch, children }: FormInputProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [isPlaceholderEdit, setIsPlaceholderEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const [placeHolder, setPlaceHolder] = useState(formData.placeHolder);
  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const placeHolderRef = useRef<HTMLInputElement | null>(null);
  const isEditable =
    formData.questionIdentify === 'SERVICEDURATION' ||
    formData.questionIdentify === 'LEARNEDROUTE' ||
    formData.questionIdentify === 'AFEWSERVINGS';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onPlaceHolderChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlaceHolder(e.target.value);
  };

  const onEditMode = () => {
    setIsTitleEdit((prev) => !prev);

    setTimeout(() => inputRef.current?.focus(), 100);

    if (isTitleEdit) {
      const copiedData: AdminForm = { ...formData };
      copiedData.questionTitle = title;

      mutate({ data: copiedData });
    }
  };

  const onPlaceHolderEdit = () => {
    setIsPlaceholderEdit((prev) => !prev);

    setTimeout(() => placeHolderRef.current?.focus(), 100);

    if (isPlaceholderEdit) {
      const copiedData: AdminForm = { ...formData };
      copiedData.placeHolder = placeHolder;

      mutate({ data: copiedData });
    }
  };

  if (formData.questionIdentify === 'RESERVATIONREQUEST')
    return (
      <FormInputWrapper>
        {children}
        <div className="header">
          {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
          <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
        </div>

        <div className="textarea">
          <textarea placeholder={placeHolder} onChange={onPlaceHolderChange} disabled={!isPlaceholderEdit} />
          <TitleEdit isTitleEdit={isPlaceholderEdit} onEditMode={onPlaceHolderEdit} />
        </div>
        <div className="footer">
          <span>0 / 150</span>
        </div>
      </FormInputWrapper>
    );

  return (
    <FormInputWrapper>
      {children}
      <div className="header">
        {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
        <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
      </div>
      <div className="input-wrapper">
        <span>{convertIdentifierToKorean(formData.questionIdentify)}</span>
        <div>
          <input
            type="text"
            value={placeHolder}
            disabled={!isPlaceholderEdit}
            ref={placeHolderRef}
            onChange={onPlaceHolderChange}
          />
          <TitleEdit isTitleEdit={isPlaceholderEdit} onEditMode={onPlaceHolderEdit} />
        </div>
      </div>

      <div className="button">{isEditable && <ChangeButton formData={formData} refetch={refetch} />}</div>
    </FormInputWrapper>
  );
}

export default String;
