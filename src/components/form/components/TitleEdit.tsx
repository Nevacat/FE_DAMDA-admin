import React from 'react';
import Check from '@/components/form/components/svg/Check';
import Edit from '@/components/form/components/svg/edit';
import { EditButtonWrapper } from '@/styles/pages/form/form.styled';
import { FormTitleEditProps } from '@/types/components/form';

function TitleEdit({ onEditMode, isTitleEdit }: FormTitleEditProps) {
  return <EditButtonWrapper onClick={onEditMode}>{isTitleEdit ? <Check /> : <Edit />}</EditButtonWrapper>;
}

export default TitleEdit;
