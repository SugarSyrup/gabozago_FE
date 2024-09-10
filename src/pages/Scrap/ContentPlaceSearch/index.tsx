import { useSearchParams } from 'react-router-dom';

import * as S from './style';
import PageTemplate from '@_common/PageTemplate';
import LeftChevronIcon from '@_icons/chevron_left.svg?react';
import useSearchInput from '../../../hooks/useSearchInput';
import { useEffect, useState } from 'react';
import { TPlace } from '@_types/Place.type';
import { get } from '@_utils/api';
import Typography from '@_common/Typography';
import LocationPlaceholderIcon from '../../../components/mytrip/LocationPlaceholderIcon';

function ContentPlaceSearchPage() {
  const [data, setData] = useState<TPlace[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '',
    onChange: () => {},
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();
    },
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchParams.get('name') as string;
      get<TPlace[]>(`/place/list-search?location=&query=${searchParams.get('name')}`).then(
        (res) => {
          setData(res.data);
        },
      );
    }
  }, []);

  return (
    <PageTemplate
      header={
        <S.Header>
          <S.SearchBar>
            <LeftChevronIcon />
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
      <S.List>
        {data.map((place, index) => (
          <S.Item key={index}>
            <S.LeftItems>
              <S.Thumbnail>
                {place.thumbnailURL ? (
                  <img src={place.thumbnailURL} alt={place.thumbnailURL} />
                ) : (
                  <LocationPlaceholderIcon type={((place.placeId % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
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
            {/* <S.Button isActive={isActive} onClick={onBtnClick}>
              <Typography.Label size="lg" color="inherit">
                선택
              </Typography.Label>
            </S.Button> */}
          </S.Item>
        ))}
      </S.List>
    </PageTemplate>
  );
}

export default ContentPlaceSearchPage;
