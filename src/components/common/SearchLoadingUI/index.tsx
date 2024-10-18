import WaitingIMG from '@_imgs/waitingIMG.png';
import * as S from './style';

function SearchLoadingUI() {
  return (
    <S.SearchingContainer>
      <img src={WaitingIMG} alt="waiting" />
      <span>검색 결과를 찾고 있어요</span>
    </S.SearchingContainer>
  );
}

export default SearchLoadingUI;
