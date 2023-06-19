import { AdminForm } from '@/types/api/form';
import React from 'react';

export interface FormElementsProps {
  formData: AdminForm;
}

export interface FormInputProps {
  formData: AdminForm;
}

export interface FormAddressProps {
  formData: AdminForm;
}

export interface FormSelectProps {
  formData: AdminForm;
}

export interface FormRadioProps {
  formData: AdminForm;
  children: React.ReactNode | null;
}

export interface FormDateInputProps {
  formData: AdminForm;
}

export interface FormInputProps {
  formData: AdminForm;
}
