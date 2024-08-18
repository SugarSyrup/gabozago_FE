import Typography from '@_common/Typography';
import useSearchInput from '../../../hooks/useSearchInput';
import InstagramIcon from '../../../assets/imgs/instagram_icon.png';
import * as S from './style';
import { useEffect, useState } from 'react';
import { get } from '@_utils/api';

interface ContentResponseType {
  id: number;
  title: string;
  thumbnail: string;
  socialType: string;
  isWatched: boolean;
}

function ScrapedContents() {
  const [data, setData] = useState<ContentResponseType[]>([]);
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '콘텐츠 를 검색해보세요.',
    onChange: () => {},
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();
    },
  });

  useEffect(() => {
    // @TODO: API 연동
    // @TODO: 검색에 따라 결과 바꿔지게 수정
  }, []);

  return (
    <>
      <S.SearchBarWrapper>
        <SearchInput />
      </S.SearchBarWrapper>
      <S.ContentsHeader>
        <Typography.Title size="md" color="inherit">
          {/* TODO: data.length */}
          전체 <S.FontHighlight>123</S.FontHighlight>
        </Typography.Title>
        {/* @TODO: 편집 모드 UI 및 버튼 기능 구성 */}
        <Typography.Title size="sm" color="inherit">
          <S.FontHighlight>편집하기</S.FontHighlight>
        </Typography.Title>
      </S.ContentsHeader>
      <S.ContentsContainer>
        {/* @TODO: Item onClick */}
        <S.ContentItem>
          <S.ImgWrapper>
            <img src="https://via.placeholder.com/150" alt="content" />
            <S.IconWrapper>
              <img src={InstagramIcon} alt="instagramIcon" />
            </S.IconWrapper>
          </S.ImgWrapper>
          <S.Title>
            <Typography.Title size="sm" noOfLine={2} color="inherit">
              콘텐츠 제목
            </Typography.Title>
          </S.Title>
        </S.ContentItem>
        <S.ContentItem>
          <S.ImgWrapper>
            <img src="https://via.placeholder.com/150" alt="content" />
            <S.IconWrapper>
              <img src={InstagramIcon} alt="instagramIcon" />
            </S.IconWrapper>
          </S.ImgWrapper>
          <S.Title>
            <Typography.Title size="sm" noOfLine={2} color="inherit">
              콘텐츠 제목
            </Typography.Title>
          </S.Title>
        </S.ContentItem>
        <S.ContentItem>
          <S.ImgWrapper>
            <img src="https://via.placeholder.com/150" alt="content" />
            <S.IconWrapper>
              <img src={InstagramIcon} alt="instagramIcon" />
            </S.IconWrapper>
          </S.ImgWrapper>
          <S.Title>
            <Typography.Title size="sm" noOfLine={2} color="inherit">
              콘텐츠 제목
            </Typography.Title>
          </S.Title>
        </S.ContentItem>
        <S.ContentItem>
          <S.ImgWrapper>
            <S.NotWatched>
              <Typography.Title size="md" noOfLine={2} color="inherit">
                미열람
                <br />
                콘텐츠
              </Typography.Title>
            </S.NotWatched>
            <img src="https://via.placeholder.com/150" alt="content" />
            <S.IconWrapper>
              <img src={InstagramIcon} alt="instagramIcon" />
            </S.IconWrapper>
          </S.ImgWrapper>
          <S.Title>
            <Typography.Title size="md" noOfLine={2} color="inherit">
              콘텐츠 제목
            </Typography.Title>
          </S.Title>
        </S.ContentItem>
      </S.ContentsContainer>
    </>
  );
}

export default ScrapedContents;
