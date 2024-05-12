import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";

import Typography from "../../common/Typography";
import LocationRandomIcon from "../../mytrip/LocationRandomIcon";

interface Props {
  id: string;
  name: string;
  theme: string;
  thumbnail?: string;
  keyword?: string;
}

function RecommendationListItem({
  thumbnail,
  name,
  theme,
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
          {
            thumbnail ? 
            <img src={thumbnail} />
            :
            <LocationRandomIcon type={1}/>
          }
        </S.Thumbnail>
        <S.Infomation>
          {keyword ? (
            <Typography.Title size="lg">
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
            </Typography.Title>
          ) : (
            <Typography.Title size="lg">{name}</Typography.Title>
          )}
          <Typography.Label size="lg" color="#A6A6A6">
            <span>{theme}</span>
          </Typography.Label>
        </S.Infomation>
      </S.LeftItems>
      <S.Button isActive={isActive} onClick={onBtnClick}>
        <Typography.Label size="lg" color="inherit">선택</Typography.Label>
      </S.Button>
    </S.Container>
  );
}

export default RecommendationListItem;
