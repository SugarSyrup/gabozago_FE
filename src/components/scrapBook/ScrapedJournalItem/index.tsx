import * as S from './style';
import UserIcon from '../../../assets/icons/my.svg?react';
import ClapIcon from '../../../assets/icons/clap.svg?react';
import BookMarkIcon from '../../../assets/icons/bookmark.svg?react';
import imageIcon from '../../../assets/icons/image.svg';

interface Props {
  title: string;
  thumbnail: string;
  username: string;
  like: number;
  scraped: number;
}
function ScrapedJournalItem({ title, thumbnail, username, like, scraped }: Props) {
  return (
    <S.JournalItem>
      <S.StyledLink to="/">
        <S.InfoBox>
          <S.JournalTitle>{title}</S.JournalTitle>
          <S.BottomInfoList>
            <S.BottomInfoItemTop>
              <S.HiddenInfoTitle>유저명</S.HiddenInfoTitle>
              <UserIcon />
              {username}
            </S.BottomInfoItemTop>
            <S.BottomInfoItemBottom>
              <div>
                <S.HiddenInfoTitle>좋아요 수</S.HiddenInfoTitle>
                <ClapIcon className="clap" />
                {like}
              </div>
              <div>
                <S.HiddenInfoTitle>스크랩 수</S.HiddenInfoTitle>
                <BookMarkIcon />
                {scraped}
              </div>
            </S.BottomInfoItemBottom>
          </S.BottomInfoList>
        </S.InfoBox>
        {thumbnail ? (
          <S.ThumbnailImage src={thumbnail} alt="" />
        ) : (
          <S.ThumbnailImagePlaceHolder src={imageIcon} alt="이미지 불러오기에 실패했습니다." />
        )}
      </S.StyledLink>
    </S.JournalItem>
  );
}

export default ScrapedJournalItem;
