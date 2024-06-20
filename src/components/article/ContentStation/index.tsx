import DoubleCircleIcon from '../../../assets/icons/double_circle.svg?react';
import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  index: number;
  name: string;
  refs: React.MutableRefObject<null[] | HTMLDivElement[]>;
}

function ContentStation({ index, name, refs }: Props) {
  return (
    <S.Container id={`article_${index}`} ref={(ele) => (refs.current[index] = ele)}>
      <S.Index>
        <DoubleCircleIcon />
        <Typography.Title size="lg" color="inherit">
          Station
          {index}
        </Typography.Title>
      </S.Index>
      <Typography.Headline size="sm" noOfLine={3}>
        <span dangerouslySetInnerHTML={{ __html: name }} />
      </Typography.Headline>
    </S.Container>
  );
}
export default ContentStation;
