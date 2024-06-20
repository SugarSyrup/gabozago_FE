import * as S from './style';

interface Props {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  color?: string;
  noOfLine?: number;
  maxWidth?: number;
}

function Title({ children, size, noOfLine, maxWidth, color }: Props) {
  return (
    <S.Title size={size} noOfLine={noOfLine} maxWidth={maxWidth} color={color}>
      {children}
    </S.Title>
  );
}

export default Title;
