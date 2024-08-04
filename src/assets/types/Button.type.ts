import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  rounded?: boolean;
  bgColor?: 'blue' | 'gray';
}

export default Props;
