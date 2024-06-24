import KebabIcon from '../../../assets/icons/menu_kebab.svg?react';
import BottomNav from '../../post/BottomNav';
import BackButton from '../BackButton';

import * as S from './style';

interface Props {
  children: React.ReactNode;
  postId: number;
  isClap: boolean;
  claps: number;
  comment: number;
  onCommentClick: () => void;
  bookmark: number;
  shares: number;
  title: string;
}

function CommunityPageTemplate({ children, ...props }: Props) {
  return (
    <S.Container>
      <S.Header>
        <BackButton />
        <KebabIcon />
      </S.Header>
      {children}
      <BottomNav {...props} />
    </S.Container>
  );
}

export default CommunityPageTemplate;
