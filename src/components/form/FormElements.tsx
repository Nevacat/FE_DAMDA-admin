import React from 'react';
import { FormElementsProps } from '@/types/components/form';
import Title from '@/components/form/components/Title';
import AddressInput from '@/components/form/components/AddressInput';
import Select from '@/components/form/components/Select';
import Radio from '@/components/form/components/Radio';
import DateInput from '@/components/form/components/DateInput';
import String from '@/components/form/components/String';
import { Draggable } from 'react-beautiful-dnd';
import Drag from '@/components/form/components/svg/Drag';
import { DragHandle } from '@/styles/pages/form/form.styled';
import PlaceHolderEdit from '@/components/form/components/PlaceHolderEdit';

function FormElements({ formData, refetch, index }: FormElementsProps) {
  if (formData.questionIdentify === 'ADDRESS')
    return (
      <Draggable
        key={formData.questionNumber.toString()}
        draggableId={formData.questionNumber.toString()}
        index={index}
      >
        {(provided) => (
          <div className="drag" {...provided.draggableProps} ref={provided.innerRef}>
            <AddressInput formData={formData} refetch={refetch}>
              <DragHandle {...provided.dragHandleProps}>
                <Drag />
              </DragHandle>
            </AddressInput>
          </div>
        )}
      </Draggable>
    );

  const isDuration = formData.questionIdentify === 'SERVICEDURATION' ? <PlaceHolderEdit formData={formData} /> : null;

  switch (formData.questionType) {
    case 'TITLE':
      return <Title formData={formData} refetch={refetch} />;
    case 'STRING':
      return (
        <Draggable
          key={formData.questionNumber.toString()}
          draggableId={formData.questionNumber.toString()}
          index={index}
        >
          {(provided) => (
            <div className="drag" {...provided.draggableProps} ref={provided.innerRef}>
              <String formData={formData} refetch={refetch}>
                <DragHandle {...provided.dragHandleProps}>
                  <Drag />
                </DragHandle>
              </String>
            </div>
          )}
        </Draggable>
      );
    case 'ADDRESS':
      return (
        <Draggable
          key={formData.questionNumber.toString()}
          draggableId={formData.questionNumber.toString()}
          index={index}
        >
          {(provided) => (
            <div className="drag" {...provided.draggableProps} ref={provided.innerRef}>
              <AddressInput formData={formData} refetch={refetch}>
                <DragHandle {...provided.dragHandleProps}>
                  <Drag />
                </DragHandle>
              </AddressInput>
            </div>
          )}
        </Draggable>
      );
    case 'SELECT':
      return (
        <Draggable
          key={formData.questionNumber.toString()}
          draggableId={formData.questionNumber.toString()}
          index={index}
        >
          {(provided) => (
            <div className="drag" {...provided.draggableProps} ref={provided.innerRef}>
              <Select formData={formData} refetch={refetch}>
                <DragHandle {...provided.dragHandleProps}>
                  <Drag />
                </DragHandle>
              </Select>
            </div>
          )}
        </Draggable>
      );
    case 'RADIO':
      return (
        <Draggable
          key={formData.questionNumber.toString()}
          draggableId={formData.questionNumber.toString()}
          index={index}
        >
          {(provided) => (
            <div className="drag" {...provided.draggableProps} ref={provided.innerRef}>
              <Radio
                formData={formData}
                refetch={refetch}
                dragChild={
                  <DragHandle {...provided.dragHandleProps}>
                    <Drag />
                  </DragHandle>
                }
              >
                {isDuration}
              </Radio>
            </div>
          )}
        </Draggable>
      );
    case 'DATE':
      return (
        <Draggable
          key={formData.questionNumber.toString()}
          draggableId={formData.questionNumber.toString()}
          index={index}
        >
          {(provided) => (
            <div className="drag" {...provided.draggableProps} ref={provided.innerRef}>
              <DateInput formData={formData} refetch={refetch}>
                <DragHandle {...provided.dragHandleProps}>
                  <Drag />
                </DragHandle>
              </DateInput>
            </div>
          )}
        </Draggable>
      );
  }
}

export default FormElements;
