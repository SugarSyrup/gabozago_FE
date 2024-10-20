import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import * as S from './style';
import PageTemplate from '@_common/PageTemplate';
import LeftChevronIcon from '@_icons/chevron_left.svg?react';
import useSearchInput from '../../../hooks/useSearchInput';
import { useEffect, useState } from 'react';
import { TPlace } from '@_types/Place.type';
import { get, post } from '@_utils/api';
import Typography from '@_common/Typography';
import LocationPlaceholderIcon from '../../../components/mytrip/LocationPlaceholderIcon';
import BookMarkIcon from '@_icons/bookmark.svg?react';
import BookMarkFillIcon from '@_icons/bookmark_filled.svg?react';
import SearchLoadingUI from '@_common/SearchLoadingUI';

interface TResponseData extends TPlace {
  id: number;
  isScraped: boolean;
}

function ContentPlaceSearchPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [data, setData] = useState<TResponseData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '',
    onChange: () => {},
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();

      setIsSearching(true);
      get<TResponseData[]>(
        `/place/search/scrap/content/${id}?query=${inputRef.current.value}`,
      ).then((res) => {
        setIsSearching(false);
        setData(res.data);
      });
    },
  });

  useEffect(() => {
    setIsSearching(true);
    if (inputRef.current) {
      inputRef.current.value = searchParams.get('name') as string;
      get<TResponseData[]>(
        `/place/search/scrap/content/${id}?query=${searchParams.get('name')}`,
      ).then((res) => {
        setIsSearching(false);
        setData(res.data);
      });
    }
  }, []);

  return (
    <PageTemplate
      header={
        <S.Header>
          <S.SearchBar>
            <LeftChevronIcon
              onClick={() => {
                navigate(-1);
              }}
            />
            <SearchInput />
          </S.SearchBar>
        </S.Header>
      }
    >
      <S.ListHeader>
        <Typography.Title size="lg" color="black">
          검색결과
        </Typography.Title>
        <Typography.Title size="lg" color="black">
          <S.FontHighlight>{data.length}</S.FontHighlight>
        </Typography.Title>
      </S.ListHeader>
      {isSearching ? (
        <SearchLoadingUI />
      ) : (
        <S.List>
          {data.map((place, index) => (
            <S.Item key={index}>
              <S.LeftItems
                onClick={() => {
                  navigate(`/place/${place.id}`);
                }}
              >
                <S.Thumbnail>
                  {place.thumbnailURL ? (
                    <img src={place.thumbnailURL} alt={place.thumbnailURL} />
                  ) : (
                    <LocationPlaceholderIcon type={((place.id % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
                  )}
                </S.Thumbnail>
                <S.Infomation>
                  <Typography.Title size="lg">{place.name}</Typography.Title>

                  <S.ExtraInfomation>
                    <Typography.Label size="lg" color="#A6A6A6">
                      <span>{place.category}</span>
                    </Typography.Label>
                    {place.category && place.addressShort && (
                      <Typography.Label size="lg" color="#A6A6A6">
                        <span>|</span>
                      </Typography.Label>
                    )}
                    <Typography.Label size="lg" color="#A6A6A6">
                      <span>{place.addressShort}</span>
                    </Typography.Label>
                  </S.ExtraInfomation>
                </S.Infomation>
              </S.LeftItems>
              <S.ScrapWrapper
                isActive={place.isScraped}
                onClick={() => {
                  post('/scrap/place', {
                    placeId: place.id,
                    isTripBucket: true,
                  }).then(() => {
                    setData((prev) => {
                      return prev.map((prevPlace) => {
                        if (prevPlace.id === place.id) {
                          return {
                            ...prevPlace,
                            isScraped: !prevPlace.isScraped,
                          };
                        }
                        return prevPlace;
                      });
                    });
                  });
                }}
              >
                {place.isScraped ? <BookMarkFillIcon /> : <BookMarkIcon />}
              </S.ScrapWrapper>
            </S.Item>
          ))}
        </S.List>
      )}
    </PageTemplate>
  );
}

export default ContentPlaceSearchPage;
