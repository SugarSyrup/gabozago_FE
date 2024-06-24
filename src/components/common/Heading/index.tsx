import * as S from './style';

interface Props {
  children: React.ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  noOfLine?: number;
  maxWidth?: number;
}

function Heading({ children, size, noOfLine, maxWidth }: Props) {
  return (
    <S.Heading size={size} noOfLine={noOfLine} maxWidth={maxWidth}>
      {children}
    </S.Heading>
  );
}

export default Heading;
