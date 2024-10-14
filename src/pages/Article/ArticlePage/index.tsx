/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import DoubleChevronBottom from '@_icons/double_chevron_bottom.svg?react';
import CommentMeatballIcon from '@_icons/comment_meatball.svg?react';

import BackButton from '@_common/BackButton';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import { Toast } from '@_common/Toast';

import BottomNav from '../../../components/post/BottomNav';
import Comment from '../../../components/journal/Comment';

import Editor from '../../../components/article/Editor';
import Interview from '../../../components/article/Interview';
import PlaceInfo from '../../../components/article/PlaceInfo';
import PlacePhoto from '../../../components/article/PlacePhoto';
import CheckPoints from '../../../components/article/CheckPoints';
import AbroadPlace from '../../../components/article/AbroadPlace';
import ContentStation from '../../../components/article/ContentStation';
import StationContainer from '../../../components/article/StationContainer';
import InterviewProfile from '../../../components/article/InterviewProfile';

import { get } from '@_utils/api';
import useModal from '../../../hooks/useModal';
import * as S from './style';
import Question from '../../../components/article/Question';

interface TArticle {
  title: string;
  thumbnailURL: string;
  content: string;
  closing: string | undefined;
  checkpoint: string | undefined;

  isClapped: boolean;
  isBookmarked: boolean;
  claps: number;
  commentCount: number;
  bookmark: number;

  nextArticle: {
    id: string;
    name: string;
  };
}

interface TStation {
  index: number;
  name: string;
  type: 'station';
}

interface TEditor {
  content: string;
  type: 'editor';
}

interface TQuestion {
  content: string;
  type: 'question';
}

interface TInterview {
  content: string;
  type: 'interview';
}

interface TProfile {
  photoURL: string;
  name: string;
  division: string;
  desc: string;
  type: 'profile';
}

interface TPhoto {
  photoURLs: string[];
  desc: string;
  type: 'photo';
}

interface TPlace {
  imageURL?: string;
  placeId: number;
  type: 'place';
}

interface TAbroadPlace {
  imageURL?: string;
  name: string;
  address: string;
  type: 'abroadPlace';
}

function ArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isReload, setIsReload] = useState<boolean>(true);
  const [data, setData] = useState<TArticle>();
  const [userCommentCount, setUserCommentCount] = useState<number>(0);
  const stationRefs = useRef<null[] | HTMLDivElement[]>([]);

  const { Modal, modalOpen } = useModal({
    title: '',
    handle: false,
    borderRadius: '16px',
  });

  useEffect(() => {
    setIsReload(false);
    if (!isReload) {
      window.location.reload();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {
    get<TArticle>(`/community/article/${id}`).then((response) => {
      setData(response.data);
      setUserCommentCount(response.data.commentCount);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      {data && (
        <PageTemplate
          nav={
            isLogin ?
            <BottomNav
              title={data.title}
              postId={id}
              isClap={data.isClapped}
              claps={data.claps}
              comment={userCommentCount}
              isBookmarked={data.isBookmarked}
              onCommentClick={() => {
                modalOpen();
              }}
              bookmark={data.bookmark}
              onShareClick={() => {
                toast.custom(() => (
                  <Toast>
                    <Typography.Title size="md" color="white">
                      URL이 복사되었습니다.
                    </Typography.Title>
                  </Toast>
                ));
              }}
            />
            :
            <></>
          }
        >
          <Modal>
            <Comment
              id={id}
              commentInputPosition="bottom"
              type="article"
              commentCount={data.commentCount}
              setContentsCommentCount={setUserCommentCount}
            />
          </Modal>

          <S.BackButtonWrapper>
            <BackButton />
          </S.BackButtonWrapper>
          <S.ThumbnailWrapper>
            <img src={data.thumbnailURL} alt={data.thumbnailURL} />
            <S.Header>
              <S.Type>Article by. 가보자고</S.Type>
              <S.Title>{data.title}</S.Title>
            </S.Header>
            <S.StationContainer>
              <S.StationTitle>Station 보기</S.StationTitle>
              <StationContainer
                data={JSON.parse(data.content).data.filter(
                  (content: TEditor | TInterview | TPhoto | TPlace | TProfile | TStation) =>
                    content.type === 'station',
                )}
                refs={stationRefs}
              />
              <S.Content isLogin={isLogin}>
                {/* {JSON.parse(data.content).data.map( */}
                {JSON.parse(data.content).data.map(
                  (
                    content:
                      | TEditor
                      | TInterview
                      | TPhoto
                      | TPlace
                      | TProfile
                      | TStation
                      | TAbroadPlace
                      | TQuestion,
                  ) => {
                    switch (content.type) {
                      case 'station':
                        return (
                          <ContentStation
                            index={content.index}
                            name={content.name}
                            refs={stationRefs}
                          />
                        );
                      case 'editor':
                        return (
                          <Editor
                            content={content.content !== undefined ? content.content : 'error'}
                          />
                        );
                      case 'interview':
                        return (
                          <Interview
                            content={content.content !== undefined ? content.content : 'error'}
                          />
                        );
                      case 'profile':
                        return (
                          <InterviewProfile
                            photoURL={content.photoURL}
                            name={content.name}
                            division={content.division}
                            desc={content.desc}
                          />
                        );
                      case 'photo':
                        return <PlacePhoto photoURLs={content.photoURLs} desc={content.desc} />;
                      case 'place':
                        return <PlaceInfo placeId={content.placeId} imageURL={content.imageURL} />;
                      case 'abroadPlace':
                        return (
                          <AbroadPlace
                            imageURL={content.imageURL}
                            name={content.name}
                            address={content.address}
                          />
                        );
                      case 'question':
                        return <Question content={content.content} />
                    }
                  },
                )}
                {
                  data.closing && (
                    <S.ClosingContainer>
                      <S.ClosingHeader >
                        <CommentMeatballIcon />
                        <Typography.Title size="lg" color="inherit">
                          에디터 한마디
                        </Typography.Title>
                      </S.ClosingHeader>
                      <S.ClosingContent dangerouslySetInnerHTML={{__html: data.closing}}/>
                    </S.ClosingContainer>
                  )
                }
                {data.checkpoint && <CheckPoints data={JSON.parse(data.checkpoint).data} />}
                {data.nextArticle && (
                  <S.NextArticle
                    onClick={() => {
                      setIsReload(false);
                    }}
                  >
                    <span>
                      2편 :
                      <Link to={`/article/${data.nextArticle.id}`}>‘{data.nextArticle.name}’</Link>{' '}
                      이어보기
                    </span>
                  </S.NextArticle>
                )}
              </S.Content>
            </S.StationContainer>
          </S.ThumbnailWrapper>
          {!isLogin && (
            <S.IsLoginBlur
              top={
                JSON.parse(data.content).data.filter(
                  (content: TEditor | TInterview | TPhoto | TPlace | TProfile | TStation) =>
                    content.type === 'station',
                ).length
              }
            >
              <Typography.Title size="lg" color="inherit" noOfLine={2}>
                아티클의 전문이 궁금하다면?
                <br />
                가보자고 회원으로 다양한 콘텐츠를 즐겨보세요!
              </Typography.Title>
              <DoubleChevronBottom />
              <S.LoginLinkButton
                onClick={() => {
                  navigate('/login');
                }}
              >
                <Typography.Title size="lg" color="white">
                  회원가입하고 모두 보기
                </Typography.Title>
              </S.LoginLinkButton>
            </S.IsLoginBlur>
          )}
        </PageTemplate>
      )}
    </>
  );
}

export default ArticlePage;
