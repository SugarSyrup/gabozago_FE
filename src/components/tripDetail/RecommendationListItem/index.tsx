import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../../common/Button";
import ClapIcon from "../../../assets/icons/clap.svg?react";
import StarIcon from "../../../assets/icons/star.svg?react";
import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";

interface Props {
  id: string;
  name: string;
  theme: string;
  hearts: number;
  rating: number;
  thumbnail?: string;
  keyword?: string;
}

function RecommendationListItem({
  thumbnail,
  name,
  theme,
  hearts,
  rating,
  id,
  keyword,
}: Props) {
  const [selectedPlaces, setSelectedPlaces] =
    useRecoilState(selectedPlacesState);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(
      selectedPlaces.find((selectedPlace) => selectedPlace.id === id) !==
        undefined
    );
  }, [selectedPlaces]);

  function onBtnClick() {
    if (isActive) {
      setSelectedPlaces((prev) =>
        prev.filter((SelectedPlace) => SelectedPlace.id !== id)
      );
    } else {
      setSelectedPlaces((prev) => [
        {
          name,
          thumbnail,
          id,
        },
        ...prev,
      ]);
    }
  }

  return (
    <S.Container>
      <S.LeftItems>
        <S.Thumbnail>
          <img src={thumbnail} />
        </S.Thumbnail>
        <S.Infomation>
          {keyword ? (
            <S.Name>
              {name.split("").map((word, index) => {
                if (
                  name.indexOf(keyword) <= index &&
                  index < name.indexOf(keyword) + keyword.length
                ) {
                  return <S.HighlightName>{word}</S.HighlightName>;
                } else {
                  return <>{word}</>;
                }
              })}
            </S.Name>
          ) : (
            <S.Name>{name}</S.Name>
          )}
          <S.Desc>
            <span>{theme}</span>
            <span>•</span>
            <ClapIcon />
            <span>{hearts}</span>
            <StarIcon />
            <span>{rating}</span>
          </S.Desc>
        </S.Infomation>
      </S.LeftItems>
      <Button size="sm" type="normal" active={isActive} onClick={onBtnClick}>
        선택
      </Button>
    </S.Container>
  );
}

export default RecommendationListItem;
