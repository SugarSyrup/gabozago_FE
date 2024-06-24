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
    <S.Headline size={size} noOfLine={noOfLine} maxWidth={maxWidth} color={color}>
      {children}
    </S.Headline>
  );
}

export default Headline;
