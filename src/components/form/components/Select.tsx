import React from 'react';
import { FormSelectProps } from '@/types/components/form';
import { FormSelectWrapper } from '@/styles/pages/form/form.styled';
import { convertIdentifierToKorean } from '@/utils';
import { AiOutlineDown } from 'react-icons/ai';
import { motion, Variants } from 'framer-motion';
import ChangeButton from '@/components/form/components/ChangeButton';

const variants: Variants = {
  hover: {
    border: '2px solid #00BDFF',
  },
};

function Select({ formData }: FormSelectProps) {
  return (
    <FormSelectWrapper>
      <h1>{formData.questionTitle}</h1>
      <div className="select-wrapper">
        <span>{convertIdentifierToKorean(formData.questionIdentify)}</span>
        <AiOutlineDown />
      </div>
      <div className="button">
        <ChangeButton formData={formData} />
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
