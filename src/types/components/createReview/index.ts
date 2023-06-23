export interface ImagesType {
  before: string[];
  after: string[];
}

export interface ImageFormsType {
  before: File[];
  after: File[];
}

export interface FormDataType {
  title: string;
  content: string;
}

export type BeforeAfter = 'before' | 'after';

export interface UploaderProps {
  selectImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteAddedImage: (type: BeforeAfter, idx: number) => void;
  deleteRegisteredImages: (type: BeforeAfter, imageId: number) => void;
}
