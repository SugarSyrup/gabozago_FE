import * as S from './style';

interface Props {
  photoURLs: string[];
  desc: string;
}

function PlacePhoto({ photoURLs, desc }: Props) {
  return (
    <S.Container>
      <S.ImgCarousel>
        {photoURLs.map((photoURL) => (
          <img src={photoURL} />
        ))}
      </S.ImgCarousel>
      <S.Desc>{desc}</S.Desc>
    </S.Container>
  );
}
export default PlacePhoto;
