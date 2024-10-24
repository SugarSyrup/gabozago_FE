import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import PageTemplate from '@_common/PageTemplate';
import { TFilter } from '@_types/FilterTypes';
import FilterList from '@_common/FilterList';
import TabBar from '@_common/TabBar';
import PlusIcon from '@_icons/plus.svg?react';

import ScrapedContents from '../../../components/scrapBook/ScrapedContents';
import ScrapedTripJournal from '../../../components/scrapBook/ScrapedTripJournal';
import ScrapedTripPlace from '../../../components/scrapBook/ScrapedTripPlace';

import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from '../../../recoil/filters/scrapPlaceFilterState';

import * as S from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SpinnerWrapper from '@_common/SpinnerWrapper';
import Typography from '@_common/Typography';

function ScrapBookPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const setActiveFilters = useSetRecoilState(scrapPlaceFilterState);
  const tabs = [
    {
      id: 1,
      name: '여행 장소',
      content: (
        <ScrapedTripPlace
          setIsLoading={setIsLoading}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
      ),
    },
    {
      id: 2,
      name: '콘텐츠',
      content: <ScrapedContents isEditMode={isEditMode} setIsEditMode={setIsEditMode} />,
    },
    { id: 3, name: '아티클', content: <ScrapedTripJournal /> },
  ];
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);

  useEffect(() => {
    setActiveFilters({
      location: [],
      theme: [],
      sort: '담은순',
    });
  }, []);

  useEffect(() => {
    if (searchParams.has('tab')) {
      setFocusedTabIndex(Number(searchParams.get('tab') as string));
    }
  }, []);

  return (
    <PageTemplate
      header={
        <S.Header>
          <S.Heading>스크랩</S.Heading>
          <TabBar
            tabs={tabs}
            focusedTabIndex={focusedTabIndex}
            setFocusedTabIndex={setFocusedTabIndex}
          />
          {focusedTabIndex === 0 && (
            <S.FilterContainer>
              <FilterList
                filterType="scrapShortForm"
                filters={[
                  {
                    name: 'sort',
                    options: {
                      defaultSelected: ['담은순'],
                      multiple: false,
                      options: [
                        { label: '담은순', value: '담은순' },
                        { label: '거리순', value: '거리순' },
                      ],
                    },
                  },
                  { name: 'location', options: null },
                  {
                    name: 'theme',
                    options: {
                      options: [
                        { label: '음식점', value: '음식점' },
                        { label: '카페', value: '카페' },
                        { label: '관광명소', value: '관광명소' },
                        { label: '대형마트', value: '대형마트' },
                        { label: '문화시설', value: '문화시설' },
                        { label: '편의시설', value: '편의시설' },
                        { label: '숙박시설', value: '숙박시설' },
                        { label: '주차장', value: '주차장' },
                        { label: '기타', value: '기타' },
                      ],
                    },
                  },
                ]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />

              {!isEditMode && (
                <S.NewPlaceButton
                  onClick={() => {
                    navigate('/scrapbook/place/add');
                  }}
                >
                  <PlusIcon />
                  <Typography.Title size="md" color="#5276FA" noOfLine={-1}>
                    새 장소
                  </Typography.Title>
                </S.NewPlaceButton>
              )}
            </S.FilterContainer>
          )}
          {/* {focusedTabIndex === 1 && (
            <S.FilterContainer>
              <FilterList
                filterType="scrapPlace"
                filters={[{ name: 'location', options: null }]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />
            </S.FilterContainer>
          )} */}
        </S.Header>
      }
    >
      {isLoading && <SpinnerWrapper />}
      {tabs[focusedTabIndex].content}
    </PageTemplate>
  );
}

export default ScrapBookPage;
