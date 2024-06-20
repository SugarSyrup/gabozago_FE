import { Link } from 'react-router-dom';
import CommentIcon from '../../../assets/icons/comment_fill.svg?react';
import Typography from '../../common/Typography';
import { commentsResponseType } from '../UserActivity';
import * as S from './style';

interface Props {
  data: commentsResponseType['results'];
  type: 'short-form' | 'article';
}

function UserCommentsList({ data, type }: Props) {
  return (
    <S.List>
      {data.map(({ id, comment, title }) => (
        <S.Item>
          <CommentIcon />
          <S.Text>
            <Typography.Title size="md">{comment}</Typography.Title>
            {type === 'short-form' ? (
              <Link to={`/journal/shortform/${id}`} style={{ textDecoration: 'none' }}>
                <Typography.Label size="md" color="#A6A6A6">
                  {title}
                </Typography.Label>
              </Link>
            ) : (
              <Link to={`/article/${id}`} style={{ textDecoration: 'none' }}>
                <Typography.Label size="md" color="#A6A6A6">
                  {title}
                </Typography.Label>
              </Link>
            )}
          </S.Text>
        </S.Item>
      ))}
    </S.List>
  );
}

export default UserCommentsList;
