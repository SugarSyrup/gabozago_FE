import { MouseEventHandler } from 'react';

export interface TPopupValue {
  Icon?: React.ReactNode;
  Header?: string;
  Description?: string;
  Warning?: string;
  ConfirmButton?: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text: string;
  };
  CloseButton?: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text: string;
  };
  Custom?: React.ReactNode;
  NoTemplateCustom?: React.ReactNode;
}
