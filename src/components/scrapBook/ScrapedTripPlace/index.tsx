import * as S from "./style";
import BookMarkIcon from "../../../assets/icons/bookmark_filled.svg?react";
import { useEffect, useState } from "react";
import { get, post } from "../../../utils/api";
import { useRecoilState, useRecoilValue } from "recoil";
import FilterList from "../../common/FilterList";
import RightChevronIcon from "../../../assets/icons/chevron_right.svg?react";
import Typography from "../../common/Typography";
import { useNavigate } from "react-router-dom";
import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from "../../../recoil/filters/scrapPlaceFilterState";
import { TFilter } from "../../../assets/types/FilterTypes";

interface Place {
  id: number;
  name: string;
  theme: string[];
  address: string;
}

function ScrapedTripPlace() {
  const navigate = useNavigate();
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);
  const [places, setPlaces] = useState<Place[]>([]);

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
      console.log(data);
      setPlaces(data.results);

      return;
    }
  };

  const toggleBookmark = (id: number) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      post<{
        next: string | null;
        previous: string | null;
        results: Place[];
      }>(`folder/scrap/place`, {
        placeId: id,
      });

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
          filterType="scrapPlace"
          filters={[{ name: "location", options: null }]}
          filterState={filter}
          setFilterState={setFilter}
          activeFilterState={activeFilter}
        />
      </S.FilterContainer>
      <S.PlaceList>
        {places.map((item) => (
          <S.PlaceItem>
            <div>
              <S.BookMarkButton
                onClick={() => {
                  toggleBookmark(item.id);
                  setPlaces((prev) =>
                    prev.filter((place) => place.id !== item.id)
                  );
                }}
              >
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
            <S.DetailViewButton
              onClick={() => {
                navigate(`/place/${item.id}`);
              }}
            >
              <Typography.Label size="sm" color="#5276FA">
                상세보기
              </Typography.Label>
              <RightChevronIcon />
            </S.DetailViewButton>
          </S.PlaceItem>
        ))}
      </S.PlaceList>
    </>
  );
}

export default ScrapedTripPlace;
