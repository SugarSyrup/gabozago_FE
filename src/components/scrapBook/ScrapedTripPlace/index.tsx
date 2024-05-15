import * as S from "./style";
import BookMarkIcon from "../../../assets/icons/bookmark_filled.svg?react";
import { useEffect, useState } from "react";
import { get, post } from "../../../utils/api";
import { useRecoilState } from "recoil";
import {
  TFilter,
  journalFilterState,
} from "../../../recoil/journals/journalState";
import FilterList from "../../common/FilterList";
import RightChevronIcon from "../../../assets/icons/chevron_right.svg?react";
import Typography from "../../common/Typography";
import { useNavigate } from "react-router-dom";

interface Place {
  id: number;
  name: string;
  theme: string[];
  address: string;
}

function ScrapedTripPlace() {
  const navigate = useNavigate();
  const [filter, setFilter] = useRecoilState<TFilter>(journalFilterState);
  const [places, setPlaces] = useState<Place[]>([
    {
      id: 40,
      name: "네이밍카페 커피고 난곡점",
      theme: ["반려동물"],
      address: "서울특별시 관악구 신림동 538-1",
    },
    {
      id: 80,
      name: "김밥천국",
      theme: ["미식"],
      address: "서울특별시 관악구 미성동 1680-51",
    },
  ]);

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
          filters={["location"]}
          filterState={filter}
          filterSetState={setFilter}
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
