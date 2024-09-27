import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Typography from '@_common/Typography';
import { deletes, get } from '@_utils/api';
import { TPagination } from '@_types/server/pagination.type';
import { TContentShorten } from '@_types/server/content.type';
import { popupValue } from '@_recoil/common/PopupValue';
import WaitingIMG from '../../../assets/imgs/waitingIMG.png';

import useSearchInput from '../../../hooks/useSearchInput';
import InstagramIcon from '../../../assets/imgs/instagram_icon.png';

import * as S from './style';
import usePopup from '../../../hooks/usePopup';

interface TResponse extends TPagination<TContentShorten> {
  count: number;
}

function ScrapedContents() {
  const navigate = useNavigate();
  const [data, setData] = useState<TContentShorten[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [deleteContents, setDeletes] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const itemRef = useRef<HTMLDivElement>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);
  const setPopupUI = useSetRecoilState(popupValue);
  const { popupOpen, popupClose } = usePopup();

  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '콘텐츠를 검색해보세요.',
    onChange: () => {},
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();
      setIsSearch(true);

      get<TResponse>('/scrap/content', {
        params: {
          q: inputRef.current?.value,
        },
      }).then((res) => {
        setData(res.data.results);
        setCount(res.data.count);
        setNext(res.data.next?.replace('http://', 'https://'));
        setIsSearch(false);
      });
    },
  });

  useEffect(() => {
    get<TResponse>('/scrap/content').then((res) => {
      setData(res.data.results);
      setCount(res.data.count);
      setNext(res.data.next?.replace('http://', 'https://'));
    });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && next) {
        get<TResponse>(next).then((response) => {
          setData([...data, ...response.data.results]);
          setNext(response.data.next?.replace('http://', 'https://'));
        });
      }
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <>
      <S.SearchBarWrapper>
        <SearchInput />
      </S.SearchBarWrapper>
      {isSearch ? (
        <S.SearchingContainer>
          <img src={WaitingIMG} alt="waiting" />
          <span>검색 결과를 찾고 있어요</span>
        </S.SearchingContainer>
      ) : (
        <>
          <S.ContentsHeader>
            <Typography.Title size="md" color="inherit">
              {isEditMode ? (
                <p
                  onClick={() => {
                    setIsEditMode(false);
                    setDeletes([]);
                  }}
                >
                  취소
                </p>
              ) : (
                <>
                  전체 <S.FontHighlight>{count}</S.FontHighlight>
                </>
              )}
            </Typography.Title>
            <Typography.Title size="sm" color="inherit">
              {isEditMode ? (
                <p
                  onClick={() => {
                    if (deleteContents.length > 0) {
                      setPopupUI({
                        Header: `${deleteContents.length}개의 콘텐츠를 삭제하시겠어요?`,
                        Warning: '삭제한 콘텐츠는 복구할 수 없어요.',
                        CloseButton: {
                          text: '취소',
                          onClick: () => {
                            setDeletes([]);
                            window.location.reload();
                          },
                        },
                        ConfirmButton: {
                          onClick: () => {
                            deletes(`scrap/content?id=${deleteContents.toLocaleString()}`).then(
                              () => {
                                window.location.reload();
                                setDeletes([]);
                              },
                            );
                          },
                          text: '확인',
                        },
                      });
                      popupOpen();
                    }
                  }}
                >
                  {deleteContents.length === 0 ? (
                    <span
                      style={{
                        color: '#A6A6A6',
                      }}
                    >
                      삭제하기
                    </span>
                  ) : (
                    <S.FontHighlight isRead>삭제하기</S.FontHighlight>
                  )}
                </p>
              ) : (
                <p
                  onClick={() => {
                    if (data.length > 0) {
                      setIsEditMode(true);
                    }
                  }}
                  style={{
                    cursor: data.length === 0 ? 'default' : 'pointer',
                  }}
                >
                  {data.length === 0 ? '편집하기' : <S.FontHighlight>편집하기</S.FontHighlight>}
                </p>
              )}
            </Typography.Title>
          </S.ContentsHeader>
          {data.length === 0 && (
            <S.NoDataContainer>
              <Typography.Headline size="sm">스크랩한 콘텐츠가 없어요</Typography.Headline>
              <Typography.Title size="md" color="#A6A6A6" noOfLine={2}>
                트립 버킷으로 흩어진 여행 콘텐츠를 저장해보세요.
              </Typography.Title>
              <S.TripBucketButton
                onClick={() => {
                  navigate('/onboarding/tripbucket');
                }}
              >
                <Typography.Label size="lg" color="inherit">
                  트립 버킷 사용해보기
                </Typography.Label>
              </S.TripBucketButton>
            </S.NoDataContainer>
          )}
          <S.ContentsContainer>
            {data.length !== 0 &&
              data.map((content) => (
                <S.ContentItem
                  onClick={() => {
                    if (!isEditMode) {
                      navigate(`/scrapbook/content/${content.id}`);
                    }
                  }}
                  key={content.id}
                  ref={itemRef}
                >
                  {isEditMode && (
                    <>
                      {deleteContents.includes(content.id) ? (
                        <S.EditSVGWrapper
                          onClick={() => {
                            setDeletes(deleteContents.filter((id) => id !== content.id));
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.2197 8.96967L10.75 13.4393L8.78033 11.4697C8.48744 11.1768 8.01256 11.1768 7.71967 11.4697C7.42678 11.7626 7.42678 12.2374 7.71967 12.5303L10.2197 15.0303C10.5126 15.3232 10.9874 15.3232 11.2803 15.0303L16.2803 10.0303C16.5732 9.73744 16.5732 9.26256 16.2803 8.96967C15.9874 8.67678 15.5126 8.67678 15.2197 8.96967Z"
                              fill="white"
                            />
                          </svg>
                        </S.EditSVGWrapper>
                      ) : (
                        <S.EditButton
                          onClick={() => {
                            setDeletes([...deleteContents, content.id]);
                          }}
                        />
                      )}
                    </>
                  )}
                  <S.ImgWrapper>
                    {!content.isRead && !deleteContents.includes(content.id) && (
                      <S.NotWatched>
                        <Typography.Title size="md" noOfLine={2} color="inherit">
                          미열람
                          <br />
                          콘텐츠
                        </Typography.Title>
                      </S.NotWatched>
                    )}
                    {deleteContents.includes(content.id) && <S.DeleteCheckedWrapper />}
                    {content.thumbnailURL ? (
                      <img src={content.thumbnailURL} alt="content" />
                    ) : (
                      <S.NoImgWrapper height={itemRef.current?.offsetWidth}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.5771 7.2148C11.5623 6.54151 11.013 6 10.3362 6C9.65931 6 9.11006 6.54151 9.0952 7.2148H9.09484V7.22242C9.09484 7.22917 9.09385 7.23568 9.09385 7.24231C9.09385 7.24894 9.09471 7.25558 9.09484 7.26233V7.34327C8.52754 6.72131 7.82759 6.41021 6.99537 6.41021C6.48297 6.41021 6.00951 6.50859 5.5751 6.70523C5.14056 6.90198 4.76548 7.17169 4.44995 7.51485C4.13431 7.85788 3.88499 8.2606 3.70211 8.7224C3.51899 9.18444 3.42773 9.6853 3.42773 10.225C3.42773 10.7646 3.51223 11.2382 3.6816 11.6726C3.85072 12.1073 4.0885 12.48 4.39518 12.791C4.70149 13.1021 5.06515 13.3446 5.48605 13.5182C5.90671 13.6919 6.36875 13.779 6.87194 13.779C7.10051 13.779 7.31114 13.7629 7.50323 13.7309C7.69532 13.6988 7.87819 13.6462 8.05211 13.5731C8.22577 13.5001 8.39735 13.4063 8.56672 13.2917C8.73584 13.1775 8.91196 13.0333 9.09496 12.8595V13.532C9.09496 14.0535 8.95532 14.4604 8.67639 14.7532C8.39723 15.0458 7.9972 15.1922 7.47572 15.1922C6.86273 15.1922 6.46934 14.959 6.29567 14.4924H3.49639C3.56947 14.8766 3.71599 15.2311 3.93547 15.5559C4.15507 15.8805 4.43632 16.1642 4.77935 16.4067C5.12239 16.649 5.52241 16.839 5.98003 16.9762C6.43729 17.1134 6.94047 17.182 7.48947 17.182C7.97424 17.182 8.42473 17.1271 8.84109 17.0173C9.25732 16.9075 9.6302 16.7566 9.95948 16.5645C10.2889 16.3724 10.5701 16.1459 10.8034 15.8853C11.0366 15.6246 11.2082 15.3433 11.318 15.0414C11.4003 14.8034 11.4643 14.529 11.5101 14.218C11.5556 13.9069 11.5787 13.5549 11.5787 13.1614V7.2148H11.5774H11.5771ZM8.93505 10.7258C8.84797 10.9226 8.73375 11.0942 8.59202 11.2404C8.45016 11.3868 8.28092 11.5012 8.08429 11.5835C7.88753 11.6658 7.67947 11.707 7.46 11.707C7.24052 11.707 7.01846 11.6659 6.82183 11.5835C6.62495 11.5012 6.45583 11.3868 6.31409 11.2404C6.17212 11.0942 6.06023 10.9227 5.97794 10.7258C5.89566 10.5292 5.85439 10.3165 5.85439 10.0878C5.85439 9.85909 5.89774 9.66233 5.9847 9.47024C6.07153 9.27815 6.18821 9.11137 6.33461 8.96939C6.48089 8.82766 6.65025 8.71343 6.84234 8.62636C7.03443 8.53952 7.24027 8.49592 7.45987 8.49592C7.67947 8.49592 7.87365 8.53707 8.0704 8.61948C8.26704 8.70177 8.43862 8.81623 8.58502 8.96251C8.73117 9.10891 8.84785 9.27815 8.93493 9.47024C9.02176 9.66233 9.06523 9.87297 9.06523 10.1014C9.06523 10.3299 9.02176 10.5292 8.93493 10.7258H8.93505Z"
                            fill="#5276FA"
                          />
                          <path
                            d="M20.5171 8.59896C20.3065 8.13716 20.0115 7.73923 19.6321 7.40516C19.2523 7.07134 18.804 6.8106 18.2873 6.62305C17.7704 6.43563 17.2101 6.3418 16.6063 6.3418C16.0025 6.3418 15.4284 6.43784 14.9117 6.62993C14.3947 6.82202 13.9488 7.0851 13.5737 7.41892C13.1985 7.75298 12.9059 8.14625 12.6955 8.59896C12.485 9.05179 12.3799 9.53889 12.3799 10.0604C12.3799 10.6368 12.485 11.1605 12.6955 11.6316C12.9059 12.1029 13.1964 12.5077 13.5668 12.846C13.9373 13.1845 14.3785 13.4453 14.891 13.6281C15.4032 13.811 15.9614 13.9026 16.5652 13.9026C17.169 13.9026 17.7474 13.8111 18.2736 13.6281C18.7995 13.4453 19.25 13.187 19.6252 12.8529C20.0002 12.5191 20.2952 12.1212 20.5102 11.6591C20.725 11.1973 20.8328 10.6872 20.8328 10.1292C20.8328 9.57107 20.7274 9.06113 20.5171 8.59908V8.59896Z"
                            fill="#5276FA"
                          />
                          <path
                            d="M17.795 8.42223L14.7038 9.49763C14.3482 9.62131 14.367 10.1305 14.7307 10.2277L16.1081 10.5956L16.4761 11.973C16.5732 12.3368 17.0823 12.3556 17.2061 11.9999L18.2815 8.90871C18.3865 8.60695 18.0968 8.31734 17.7951 8.42235L17.795 8.42223Z"
                            fill="white"
                          />
                        </svg>
                      </S.NoImgWrapper>
                    )}
                    <S.IconWrapper>
                      <img src={InstagramIcon} alt="instagramIcon" />
                    </S.IconWrapper>
                  </S.ImgWrapper>
                  <S.Title>
                    <Typography.Title size="sm" noOfLine={2} color="inherit">
                      {content.title}
                    </Typography.Title>
                  </S.Title>
                </S.ContentItem>
              ))}
          </S.ContentsContainer>

          <div ref={infiniteRef} />
        </>
      )}
    </>
  );
}

export default ScrapedContents;
