/* eslint-disable no-nested-ternary */
import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import useSearchInput from '../../../hooks/useSearchInput';

import LeftChevronIcon from '@_icons/chevron_left.svg?react';
import MagnifyingGlassIMG from '@_imgs/magnifyingGlassIMG.png';
import BookMarkFillIcon from '@_icons/bookmark_filled.svg?react';
import BookMarkIcon from '@_icons/bookmark.svg?react';

import * as S from './style';
import { get, post } from '@_utils/api';
import { useState } from 'react';
import SearchLoadingUI from '@_common/SearchLoadingUI';
import Typography from '@_common/Typography';
import LocationPlaceholderIcon from '../../../components/mytrip/LocationPlaceholderIcon';
import { useNavigate } from 'react-router-dom';

interface IPlaceSearchData {
  id: number;
  name: string;
  category: string;
  addressShort: string;
  thumbnailURL: string;
  isScraped: boolean;
}

function ScrapBookPlaceAddPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<IPlaceSearchData[]>();
  const [isSearching, setIsSearching] = useState(false);
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '장소, 주소 검색',
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();

      setIsSearching(true);
      get<IPlaceSearchData[]>(`/place/search/scrap/place?query=${inputRef.current.value}`).then(
        (res) => {
          setData(res.data);
          setIsSearching(false);
        },
      );
    },
  });

  return (
    <PageTemplate
      nav={null}
      header={
        <S.SearchBar>
          <LeftChevronIcon
            onClick={() => {
              navigate(-1);
            }}
          />
          <SearchInput />
        </S.SearchBar>
      }
    >
      {data === undefined ? (
        <S.SearchIntroduceContainer>
          <img src={MagnifyingGlassIMG} alt="search" />
          <Typography.Title size="lg" color="#424242">
            장소를 검색해보세요!
          </Typography.Title>
        </S.SearchIntroduceContainer>
      ) : isSearching ? (
        <SearchLoadingUI />
      ) : (
        <>
          <S.ListHeader>
            <Typography.Title size="lg" color="black">
              검색결과
            </Typography.Title>
            <Typography.Title size="lg" color="black">
              <S.FontHighlight>{data.length}</S.FontHighlight>
            </Typography.Title>
          </S.ListHeader>
          <S.DataList>
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
          </S.DataList>
        </>
      )}
    </PageTemplate>
  );
}

export default ScrapBookPlaceAddPage;
