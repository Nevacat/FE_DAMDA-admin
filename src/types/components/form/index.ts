import { AdminForm } from '@/types/api/form';
import React from 'react';

export interface FormElementsProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormInputProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormAddressProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormSelectProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormRadioProps {
  formData: AdminForm;
  children: React.ReactNode | null;
  refetch: () => void;
}

export interface FormDateInputProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormInputProps {
  formData: AdminForm;
  refetch: () => void;
}

export interface FormChangeButtonProps {
  formData: AdminForm;
  refetch: () => void;
}
