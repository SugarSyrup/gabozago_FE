import * as S from './style';

interface Props {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  color?: string;
  noOfLine?: number;
  maxWidth?: number;
}

function Headline({ children, size, noOfLine, maxWidth, color }: Props) {
  return (
    <S.Body size={size} noOfLine={noOfLine} maxWidth={maxWidth} color={color}>
      {children}
    </S.Body>
  );
}

export default Headline;
