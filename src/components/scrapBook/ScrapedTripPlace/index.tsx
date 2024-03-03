import * as S from "./style";
import { useRecoilState } from "recoil";
import { scrapedPlacesState } from "../../../recoil/scrapBook/scrapState";
import BookMarkIcon from "../../../assets/icons/bookmark_filled.svg?react";
import imageIcon from "../../../assets/icons/image.svg";

function ScrapedTripPlace(props) {
  const [places, setPlaces] = useRecoilState(scrapedPlacesState);
  return (
    <S.PlaceList>
      {places.map((item) => (
        <S.PlaceItem>
          <S.BookMarkButton
            onClick={() => {
              setPlaces((prev) => prev.filter((place) => place.id !== item.id));
            }}
          >
            <BookMarkIcon />
          </S.BookMarkButton>
          <S.PlaceInfoBox>
            <S.TopInfoBox>
              <S.PlaceNameSpan>{item.placeName}</S.PlaceNameSpan>
              <S.PlaceThemeSpan>{item.theme}</S.PlaceThemeSpan>
            </S.TopInfoBox>
            <S.AddressParagraph>{item.address}</S.AddressParagraph>
            <S.ImageList>
              {item.images ? (
                item.images.map((url) => (
                  <S.Image loading="lazy" decoding="async" src={url} alt={""} />
                ))
              ) : (
                <S.ImagePlaceHolder
                  src={imageIcon}
                  alt={"이미지 불러오기에 실패했습니다."}
                />
              )}
            </S.ImageList>
          </S.PlaceInfoBox>
        </S.PlaceItem>
      ))}
    </S.PlaceList>
  );
}

export default ScrapedTripPlace;
