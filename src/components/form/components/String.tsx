import React, { useRef, useState } from 'react';
import { FormInputProps } from '@/types/components/form';
import { FormInputWrapper } from '@/styles/pages/form/form.styled';
import { convertIdentifierToKorean } from '@/utils';
import ChangeButton from '@/components/form/components/ChangeButton';
import TitleEdit from '@/components/form/components/TitleEdit';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';
import { AdminForm } from '@/types/api/form';

function String({ formData, refetch }: FormInputProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isEdittable =
    formData.questionIdentify === 'SERVICEDURATION' ||
    formData.questionIdentify === 'LEARNEDROUTE' ||
    formData.questionIdentify === 'AFEWSERVINGS';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onEditMode = () => {
    setIsTitleEdit((prev) => !prev);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    if (isTitleEdit) {
      const copiedData: AdminForm = { ...formData };
      copiedData.questionTitle = title;

      mutate({ data: copiedData });
    }
  };

  return (
    <FormInputWrapper>
      <div className="header">
        {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
        <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
      </div>
      <div className="input-wrapper">
        <span>{convertIdentifierToKorean(formData.questionIdentify)}</span>
        <input type="text" placeholder={formData.placeHolder} />
      </div>

      <div className="button">{isEdittable && <ChangeButton formData={formData} refetch={refetch} />}</div>
    </FormInputWrapper>
  );
}

export default String;
