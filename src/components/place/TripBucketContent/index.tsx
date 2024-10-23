import { useState } from 'react';

import TopChevronIcon from '@_icons/chevron_top.svg?react';
import BottomChevronIcon from '@_icons/chevron_bottom.svg?react';
import ChevronRightIcon from '@_icons/chevron_right.svg?react';

import Typography from '@_common/Typography';

import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
  data: {
    contents: {
      id: number;
      thumbnailURL: string;
      source: string;
      title: string;
    }[];
    memo: string;
  };
}

function TripBucketContent({ data }: Props) {
  const navigate = useNavigate();
  const id = useParams();
  const [isMemoOpen, setIsMemoOpen] = useState(false);

  return (
    <S.Container>
      <Typography.Headline size="sm">함께 담은 콘텐츠</Typography.Headline>
      <S.ContentList>
        {data.contents.map((content) => (
          <S.ContentItem key={content.id}>
            <img src={content.thumbnailURL} />
            <Typography.Title size="md" noOfLine={2}>
              <span
                style={{
                  wordBreak: 'normal',
                }}
              >
                {content.title}
              </span>
            </Typography.Title>
          </S.ContentItem>
        ))}
      </S.ContentList>
      <S.MemoHeadline>
        <Typography.Headline size="sm">메모</Typography.Headline>
        <S.MemoEdit
          onClick={() => {
            if (data.memo === null) {
              navigate(`/place/${id}/edit`);
            } else {
              navigate(`/place/${id}/edit?memo=${data.memo}`);
            }
          }}
        >
          <Typography.Title size="sm" color="inherit">
            수정
          </Typography.Title>
          <ChevronRightIcon />
        </S.MemoEdit>
      </S.MemoHeadline>
      <S.MemoContainer>
        <S.MemoText isOpen={isMemoOpen}>
          {data?.memo ? (
            data?.memo
              .split('\n')
              .map((line, index) => <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>)
          ) : (
            <Typography.Body size="lg" color="#A6A6A6">
              작성한 메모가 없어요.
            </Typography.Body>
          )}
        </S.MemoText>
        <S.TextButton
          onClick={() => {
            setIsMemoOpen((prev) => !prev);
          }}
        >
          {isMemoOpen ? (
            <>
              접기 <TopChevronIcon />
            </>
          ) : (
            <>
              펼치기 <BottomChevronIcon />
            </>
          )}
        </S.TextButton>
      </S.MemoContainer>
    </S.Container>
  );
}

export default TripBucketContent;
