import React, { useRef, useState } from 'react';
import { FormSelectProps } from '@/types/components/form';
import { FormSelectWrapper } from '@/styles/pages/form/form.styled';
import { convertIdentifierToKorean } from '@/utils';
import { AiOutlineDown } from 'react-icons/ai';
import { motion, Variants } from 'framer-motion';
import ChangeButton from '@/components/form/components/ChangeButton';
import TitleEdit from '@/components/form/components/TitleEdit';
import { AdminForm } from '@/types/api/form';
import { useMutation } from '@tanstack/react-query';
import { putForm } from '@/api/form';

const variants: Variants = {
  hover: {
    border: '2px solid #00BDFF',
  },
};

function Select({ formData, refetch }: FormSelectProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

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
    <FormSelectWrapper>
      <div className="header">
        {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
        <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
      </div>
      <div className="select-wrapper">
        <span>{convertIdentifierToKorean(formData.questionIdentify)}</span>
        <AiOutlineDown />
      </div>
      <div className="button">
        <ChangeButton formData={formData} refetch={refetch} />
      </div>
      <div className="item-list">
        {formData.categoryList?.map((category, index) => (
          <motion.span key={index} variants={variants} whileHover="hover">
            {category.category}
          </motion.span>
        ))}
      </div>
    </FormSelectWrapper>
  );
}

export default Select;
