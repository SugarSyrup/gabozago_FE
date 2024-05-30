import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { TFilter, journalFilterState} from "../../../recoil/journals/journalState";
import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";
import BookMarkIcon from "../../../assets/icons/bookmark_filled.svg?react";
import { get, post } from "../../../utils/api";

import FilterList from "../../common/FilterList";
import Typography from "../../common/Typography";
import * as S from "./style";

interface Props {
  popupOpen: () => void;
  setNewLocation: React.Dispatch<React.SetStateAction<string>>;
  locations: string[] | undefined;
}

interface Place {
  id: number;
  name: string;
  theme: string[];
  address: string;
}

function ScrapedPlace({ popupOpen, setNewLocation, locations }: Props) {
  const navigate = useNavigate();
  const [filter, setFilter] = useRecoilState<TFilter>(journalFilterState);
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);

  const getPlaces = async () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const { data } = await get<{
        next: string | null;
        previous: string | null;
        results: Place[];
      }>(`folder/scrap/place`, {
        params: {
          location: filter.location.join(","),
        },
      });
      setPlaces(data.results);

      return;
    }
  };

  useEffect(() => {
    getPlaces();
  }, [filter]);

  return (
    <>
      <S.FilterContainer>
        <FilterList
          filters={["location"]}
          filterState={filter}
          filterSetState={setFilter}
        />
      </S.FilterContainer>
      <S.PlaceList>
        {places.map((item) => (
          <S.PlaceItem>
            <div>
              <S.BookMarkButton>
                <BookMarkIcon />
              </S.BookMarkButton>
              <S.StyledLink to={`/place/${item.id}`}>
                <S.PlaceInfoBox>
                  <S.TopInfoBox>
                    <S.PlaceNameSpan>{item.name}</S.PlaceNameSpan>
                    <S.PlaceThemeSpan>{item.theme}</S.PlaceThemeSpan>
                  </S.TopInfoBox>
                  <S.AddressParagraph>{item.address}</S.AddressParagraph>
                </S.PlaceInfoBox>
              </S.StyledLink>
            </div>
            <S.Button isActive={selectedPlaces.find(selectedPlace => selectedPlace.id === item.id) !== undefined} onClick={() => {
              if (selectedPlaces.find(selectedPlace => selectedPlace.id === item.id) !== undefined) {
                setSelectedPlaces((prev) =>
                  prev.filter((SelectedPlace) => SelectedPlace.id !== item.id)
                );
              } else {
                get<{region: string}>(`/place/${item.id}`)
                  .then((response) => {
                    setSelectedPlaces((prev) => [
                      ...prev,
                      {
                        name: item.name,
                        thumbnail: "",
                        id: item.id,
                        location: response.data.region,
                      }
                    ]);

                    if (locations && !locations.includes(response.data.region)) {
                      setNewLocation(response.data.region);
                      popupOpen();
                    }
                  })
              }
            }}>
              <Typography.Label size="lg" color="inherit">선택</Typography.Label>
            </S.Button>
          </S.PlaceItem>
        ))}
      </S.PlaceList>
    </>
  );
}

export default ScrapedPlace;
