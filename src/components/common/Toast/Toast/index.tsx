import * as S from './style';

interface Props {
  children: React.ReactNode;
}

function Toast({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}

export default Toast;
