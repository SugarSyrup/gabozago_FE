import Typography from '@_common/Typography';
import * as S from './style';

interface Props {
  data: {
    title: string;
    blogName: string;
    date: string;
    thumbnailURL: string;
    contentURL: string;
    summary: string;
  }[];
}

function BlogContent({ data }: Props) {
  return (
    <S.Container>
      {data.map((item, index) => (
        <>
          <S.BlogItem key={index}>
            <S.BlogInfo>
              <Typography.Title size="sm" color="#424242">
                {item.blogName}
              </Typography.Title>
              <Typography.Label size="lg" color="#A6A6A6">
                |
              </Typography.Label>
              <Typography.Label size="lg" color="#A6A6A6">
                {item.date}
              </Typography.Label>
            </S.BlogInfo>
            <S.BlogTitle dangerouslySetInnerHTML={{ __html: item.title }} />
            <S.BlogContent>
              <span dangerouslySetInnerHTML={{ __html: item.summary }} />
              <img src={item.thumbnailURL} alt="thumbnail" />
            </S.BlogContent>
          </S.BlogItem>
          <S.SeperateLine />
        </>
      ))}
    </S.Container>
  );
}

export default BlogContent;
