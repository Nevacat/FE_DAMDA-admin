import React from 'react';
import { postFAQData } from '@/api/center';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FAQData } from '@/types/api/center';

import NewFaqLayout from '@/components/center/NewFaqLayout';

function NewFaqPage() {
  const { mutate } = useMutation<boolean, AxiosError, FAQData>(postFAQData);

  return <NewFaqLayout mutate={mutate} />;
}

export default NewFaqPage;
