import { AdminForm } from '@/types/api/form';
import React from 'react';

export interface FormElementsProps {
  formData: AdminForm;
  index: number;
  refetch: () => void;
}

export interface FormTitleProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormInputProps {
  formData: AdminForm;
  children: React.ReactNode | null;
  refetch: () => void;
}

export interface FormAddressProps {
  formData: AdminForm;
  children: React.ReactNode | null;
  refetch: () => void;
}

export interface FormSelectProps {
  formData: AdminForm;
  refetch: () => void;
  children: React.ReactNode | null;
}

export interface FormRadioProps {
  formData: AdminForm;
  children: React.ReactNode | null;
  dragChild: React.ReactNode | null;
  refetch: () => void;
}

export interface FormDateInputProps {
  formData: AdminForm;
  children: React.ReactNode | null;
  refetch: () => void;
}

export interface FormInputProps {
  formData: AdminForm;
  children: React.ReactNode | null;
  refetch: () => void;
}

export interface FormChangeButtonProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormTitleEditProps {
  isTitleEdit: boolean;
  onEditMode: () => void;
}
