import React, { useCallback, useRef, useState } from 'react';
import { FormDateInputProps } from '@/types/components/form';
import { FormDateInputWrapper } from '@/styles/pages/form/form.styled';
import { AiOutlineDown } from 'react-icons/ai';
import TitleEdit from '@/components/form/components/TitleEdit';
import { useMutation } from '@tanstack/react-query';
import { putCategoryList, putForm } from '@/api/form';
import { AdminForm } from '@/types/api/form';
import CheckGreen from '@/components/form/components/svg/CheckGreen';
import Plus from '@/components/form/components/svg/plus';
import RadioDelete from '@/components/form/components/RadioDelete';
import { toast, ToastContainer } from 'react-toastify';

function DateInput({ formData, refetch, children }: FormDateInputProps) {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [isPlaceHolderEdit, setIsPlaceHolderEdit] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [title, setTitle] = useState(formData.questionTitle);
  const [placeHolder, setPlaceHolder] = useState(formData.placeHolder);
  const [input, setInput] = useState('');

  const AmTimeList = formData.categoryList?.filter((category) => category.category.includes('오전'));
  const PmTimeList = formData.categoryList?.filter((category) => category.category.includes('오후'));

  const addInput = useRef<HTMLInputElement | null>(null);
  const placeholderInput = useRef<HTMLInputElement | null>(null);
  const { mutate } = useMutation(putForm, {
    onSuccess: () => {
      refetch();
      setIsTitleEdit(false);
    },
  });
  const { mutate: addCategory } = useMutation(putCategoryList, {
    onSuccess: () => {
      refetch();
      setIsAddClicked(false);
      setInput('');
    },
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const notify = (message: string) =>
    toast(message, {
      type: 'error',
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onPlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceHolder(e.target.value);
  };

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    [setInput],
  );

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

  const onPlaceholderEditMode = () => {
    setIsPlaceHolderEdit((prev) => !prev);

    setTimeout(() => {
      placeholderInput.current?.focus();
    }, 100);

    if (isPlaceHolderEdit) {
      const copiedData: AdminForm = { ...formData };
      copiedData.placeHolder = placeHolder;

      mutate({ data: copiedData });
    }
  };

  const addButtonOnClick = () => {
    setIsAddClicked((prev) => !prev);

    console.log(isAddClicked);

    setTimeout(() => {
      if (addInput.current) {
        addInput.current.focus();
      }
    }, 100);

    if (isAddClicked) {
      if (input === '') return notify('시간을 입력해주세요.');
      if (!validTime(input))
        return notify(' 시간 형식이 맞지 않습니다. 유형은 아래와 같습니다. 오전 10시\n 오후 10시\n');
      addCategory({ data: [input], questionNumber: formData.questionNumber });
    }
  };

  const validTime = (time: string) => {
    const pattern = /^(오전|오후) [0-9]+시$/;
    return pattern.test(time);
  };

  return (
    <FormDateInputWrapper>
      <ToastContainer />
      {children}
      <div className="header">
        {isTitleEdit ? <input type="text" value={title} onChange={onChange} ref={inputRef} /> : <h1>{title}</h1>}
        <TitleEdit isTitleEdit={isTitleEdit} onEditMode={onEditMode} />
      </div>
      <div className="select-wrapper">
        <div className="input-wrapper">
          <span>서비스 날짜</span>
          <AiOutlineDown />
        </div>
        <div className="radio-wrapper">
          <div className="placeholder">
            {isPlaceHolderEdit ? (
              <input type="text" value={placeHolder} onChange={onPlaceholderChange} ref={placeholderInput} />
            ) : (
              <h4>{placeHolder}</h4>
            )}
            <TitleEdit isTitleEdit={isPlaceHolderEdit} onEditMode={onPlaceholderEditMode} />
          </div>
          <div className="radio-item-wrapper am">
            {AmTimeList &&
              AmTimeList.map((category, idx) => (
                <span key={idx}>
                  {category.category}
                  <RadioDelete refetch={refetch} category={category} />
                </span>
              ))}
          </div>
          <div className="radio-item-wrapper pm">
            {PmTimeList &&
              PmTimeList.map((category, idx) => (
                <span key={idx}>
                  {category.category}
                  <RadioDelete refetch={refetch} category={category} />
                </span>
              ))}
          </div>
          {isAddClicked && (
            <input ref={addInput} type="text" placeholder="입력중" onChange={onInputChange} value={input} />
          )}

          <div className="button-wrapper">
            <div onClick={addButtonOnClick}>{isAddClicked ? <CheckGreen /> : <Plus />}</div>
          </div>
        </div>
      </div>
    </FormDateInputWrapper>
  );
}

export default DateInput;
