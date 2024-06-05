import * as S from "./style";
import BookMarkIcon from "../../../assets/icons/bookmark_filled.svg?react";
import { useEffect, useRef, useState } from "react";
import { get, post } from "../../../utils/api";
import RightChevronIcon from "../../../assets/icons/chevron_right.svg?react";
import Typography from "../../common/Typography";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { scrapPlaceFilterState } from "../../../recoil/filters/scrapPlaceFilterState";
import { TFilter } from "../../../assets/types/FilterTypes";

interface Place {
  id: number;
  name: string;
  theme: string[];
  address: string;
}

function ScrapedTripPlace() {
  const navigate = useNavigate();
  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);
  const resetFilter = useResetRecoilState(scrapPlaceFilterState);
  const [places, setPlaces] = useState<Place[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);

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
      setNext(data.next);

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

  useEffect(() => {
    resetFilter();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && next) {
          get<{
            next: string | null;
            previous: string | null;
            results: Place[];
          }>(next).then((res) => {
            setPlaces([...places, ...res.data.results]);
            setNext(res.data.next);
          });
        }
      });
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <S.PlaceList marginTop={filter.location?.length > 0 ? "88px" : "58px"}>
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
      <div ref={infiniteRef} />
    </S.PlaceList>
  );
}

export default ScrapedTripPlace;
