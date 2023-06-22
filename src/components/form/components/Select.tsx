import React, { useRef, useState } from 'react';
import { FormSelectProps } from '@/types/components/form';
import { FormSelectWrapper } from '@/styles/pages/form/form.styled';
import { convertIdentifierToKorean } from '@/utils';
import { AiOutlineDown } from 'react-icons/ai';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import ChangeButton from '@/components/form/components/ChangeButton';
import TitleEdit from '@/components/form/components/TitleEdit';
import { AdminForm, CategoryList } from '@/types/api/form';
import { useMutation } from '@tanstack/react-query';
import { deleteCategory, putCategoryList, putForm } from '@/api/form';
import Delete from '@/components/form/components/svg/delete';
import Plus from '@/components/form/components/svg/plus';
import Check from '@/components/form/components/svg/Check';
import { toast, ToastContainer, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const variants: Variants = {
  hover: {
    border: '2px solid #00BDFF',
  },

  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

function Select({ formData, refetch }: FormSelectProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const [isAddMode, setIsAddMode] = useState(false);
  const [category, setCategory] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const plusInputRef = useRef<HTMLInputElement | null>(null);

  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const { mutate: deleteCategoryHandle } = useMutation(deleteCategory, {
    onSuccess: () => {
      refetch();
    },
  });
  const { mutate: addCategoryHandle } = useMutation(putCategoryList, {
    onSuccess: () => {
      refetch();
      setIsAddMode(false);
      setCategory('');
    },
  });

  const notify = (message: string, type: TypeOptions) => toast(message, { type });

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

  const onDeleteClick = (category: CategoryList) => {
    const value = confirm('ㄹ?ㅇ?');

    if (value) {
      const categoryNumber = category.id;
      deleteCategoryHandle({ categoryNumber });
    }
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onPlusClick = () => {
    setIsAddMode((prev) => !prev);

    setTimeout(() => {
      plusInputRef.current?.focus();
    }, 100);

    if (isAddMode) {
      const questionNumber = formData.questionNumber;
      const data = [category];

      if (category === '') return notify('추가할 항목을 입력해주세요.', 'error');

      addCategoryHandle({ data, questionNumber });
    }
  };

  return (
    <FormSelectWrapper>
      <ToastContainer />
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
            <div onClick={() => onDeleteClick(category)}>
              <Delete />
            </div>
          </motion.span>
        ))}
        <AnimatePresence>
          {isAddMode && (
            <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
              <input
                type="text"
                placeholder="추가할 항목을 입력해주세요."
                className="add"
                onChange={onCategoryChange}
                ref={plusInputRef}
                value={category}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="plus-wrapper" onClick={onPlusClick}>
          {isAddMode ? <Check /> : <Plus />}
        </div>
      </div>
    </FormSelectWrapper>
  );
}

export default Select;
