import { Dispatch } from 'react';

import * as S from './style';
import Typography from '../../common/Typography';

interface Props {
  actFilter: 'clap' | 'comment';
  setActFilter: Dispatch<React.SetStateAction<'clap' | 'comment'>>;
}

function UserActivityFilter({ actFilter, setActFilter }: Props) {
  return (
    <S.FilterList>
      <S.FilterItem isActive={actFilter === 'clap'} onClick={() => setActFilter('clap')}>
        <Typography.Title size="sm" color="inherit">
          공감한 글
        </Typography.Title>
      </S.FilterItem>
      <S.FilterItem isActive={actFilter === 'comment'} onClick={() => setActFilter('comment')}>
        <Typography.Title size="sm" color="inherit">
          댓글 단 글
        </Typography.Title>
      </S.FilterItem>
    </S.FilterList>
  );
}

export default UserActivityFilter;
