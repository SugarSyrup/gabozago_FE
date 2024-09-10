import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { get } from '@_utils/api';
import * as S from './style';
import PageTemplate from '../../../components/common/PageTemplate';
import PageHeader from '../../../components/common/PageHeader';
import TabBar from '../../../components/common/TabBar';
import ScrapedArticle from '../../../components/scrapBook/ScrapedArticle';
import FilterList from '../../../components/common/FilterList';
// import ShortFormList, {
//   ShortForm,
// } from '../../../components/home/journals/shortform/ShortFormList';
import {
  ButtonsOptions,
  SelectOptions,
  TFilter,
  TFilterAndOptions,
} from '../../../assets/types/FilterTypes';
import { orderingOptionMap, themeCodeMap, themeOptions } from '../../../recoil/filters/codeMap';
import {
  activeScrapArticleFilterListState,
  articleOrderingOptions,
  scrapArticleFilterState,
} from '../../../recoil/filters/scrapArticleFilter';

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  thumbnailURL: string;
  claps: number;
  comment: number;
  bookmark: number;
}

function ScrapBookGroupPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* 아티클 */
  const [articleFilter, setArticleFilter] = useRecoilState<TFilter>(scrapArticleFilterState);
  const activeArticleFilter = useRecoilValue(activeScrapArticleFilterListState);
  const resetArticleFilter = useResetRecoilState(scrapArticleFilterState);

  const getArticles = async () => {
    if (localStorage.getItem('access_token') === null) return;
    const params = {
      ordering: orderingOptionMap.get(articleFilter.sort),
      folder: id === 'all' ? null : id,
      cursor: '',
    };
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: Article[];
    }>('folder/scrap/community/article', {
      params,
    });
    setArticles(data.results);
  };

  useEffect(() => {
    getArticles();
  }, [activeArticleFilter]);

  useEffect(() => {
    resetArticleFilter();
  }, []);

  return (
    <PageTemplate
      header={
        <S.HeaderContainer>
          <PageHeader>{id === 'all' ? '모든게시물' : searchParams.get('name')}</PageHeader>

          <S.FilterContainer>
            <FilterList
              filters={[
                {
                  name: 'sort',
                  options: {
                    options: articleOrderingOptions,
                  } as SelectOptions,
                },
              ]}
              filterType="scrapArticle"
              filterState={articleFilter}
              setFilterState={setArticleFilter}
              activeFilterState={activeArticleFilter}
            />
          </S.FilterContainer>
        </S.HeaderContainer>
      }
    >
      <S.ContentsContainer ref={containerRef}>
        <S.ArticleList>
          {articles.map((item, index) => (
            <li key={index}>
              <ScrapedArticle {...item} />
            </li>
          ))}
        </S.ArticleList>
      </S.ContentsContainer>
    </PageTemplate>
  );
}

export default ScrapBookGroupPage;
