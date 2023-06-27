import React, { useRef, useState } from 'react';
import { AdminForm } from '@/types/api/form';
import TitleEdit from '@/components/form/components/TitleEdit';
import { FormPlaceHolderEdit } from '@/styles/pages/form/form.styled';
import { putForm } from '@/api/form';
import { useMutation } from '@tanstack/react-query';

function PlaceHolderEdit({ formData }: { formData: AdminForm }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(formData.placeHolder);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { mutate } = useMutation(putForm, {
    onSuccess: () => {},
  });

  const onEditMode = () => {
    setIsEditMode((prev) => !prev);

    if (isEditMode) {
      const copied = { ...formData };
      copied.placeHolder = placeHolder;

      mutate({ data: copied });
    }
  };

  return (
    <FormPlaceHolderEdit>
      {isEditMode ? (
        <input
          ref={inputRef}
          type="text"
          value={placeHolder}
          onChange={(e) => setPlaceHolder(e.target.value)}
          onBlur={onEditMode}
        />
      ) : (
        <div onClick={onEditMode}>{placeHolder}</div>
      )}
      <TitleEdit isTitleEdit={isEditMode} onEditMode={onEditMode} />
    </FormPlaceHolderEdit>
  );
}

export default PlaceHolderEdit;
