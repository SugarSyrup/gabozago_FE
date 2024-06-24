import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import * as S from './style';
import PageTemplate from '../../../components/common/PageTemplate';
import ScrapedTripJournal from '../../../components/scrapBook/ScrapedTripJournal';
import ScrapedTripPlace from '../../../components/scrapBook/ScrapedTripPlace';
import TabBar from '../../../components/common/TabBar';
import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from '../../../recoil/filters/scrapPlaceFilterState';
import { TFilter } from '../../../assets/types/FilterTypes';
import FilterList from '../../../components/common/FilterList';

function ScrapBookPage() {
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const setActiveFilters = useSetRecoilState(scrapPlaceFilterState);
  const tabs = [
    { id: 1, name: '콘텐츠', content: <ScrapedTripJournal /> },
    { id: 2, name: '여행 장소', content: <ScrapedTripPlace /> },
  ]; // content 속성에 보여줄 컴포넌트 매핑
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);

  useEffect(() => {
    setActiveFilters({
      location: [],
    });
  }, []);

  return (
    <PageTemplate
      header={
        <S.Header>
          <S.Heading>스크랩 북</S.Heading>
          <TabBar
            tabs={tabs}
            focusedTabIndex={focusedTabIndex}
            setFocusedTabIndex={setFocusedTabIndex}
          />
          {focusedTabIndex === 1 && (
            <S.FilterContainer>
              <FilterList
                filterType="scrapPlace"
                filters={[{ name: 'location', options: null }]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />
            </S.FilterContainer>
          )}
        </S.Header>
      }
    >
      <S.Contents>{tabs[focusedTabIndex].content}</S.Contents>
    </PageTemplate>
  );
}

export default ScrapBookPage;
