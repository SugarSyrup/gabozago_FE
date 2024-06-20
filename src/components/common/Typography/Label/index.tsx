import * as S from './style';

interface Props {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  color?: string;
  noOfLine?: number;
  maxWidth?: number;
}

function Label({ children, size, noOfLine, maxWidth, color }: Props) {
  return (
    <S.Label size={size} noOfLine={noOfLine} maxWidth={maxWidth} color={color}>
      {children}
    </S.Label>
  );
}

export default Label;
