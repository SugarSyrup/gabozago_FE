import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {data} from "../../assets/data/articleData";
import DoubleChevronBottom from "../../assets/icons/double_chevron_bottom.svg?react";

import StationContainer from "../../components/article/StationContainer";
import BackButton from "../../components/common/BackButton";
import PageTemplate from "../../components/common/PageTemplate";
import BottomNav from "../../components/post/BottomNav";
import CheckPoints from "../../components/article/CheckPoints";

import ContentStation from "../../components/article/ContentStation";
import Editor from "../../components/article/Editor";
import PlacePhoto from "../../components/article/PlacePhoto";
import PlaceInfo from "../../components/article/PlaceInfo";
import InterviewProfile from "../../components/article/InterviewProfile";
import Interview from "../../components/article/Interview";
import Typography from "../../components/common/Typography";

import * as S from "../ArticlePage/style";
import useModal from "../../hooks/useModal";
import Comment from "../../components/journal/Comment";
import useAlert from "../../hooks/useAlert";
import useScrapModal from "../../components/video/useScrapModal";


interface TStation {
    index: number,
    name: string,
    type: "station"
}
 
interface TEditor {
    content: string,
    type: "editor"
}

interface TInterview {
    content: string,
    type: "interview"
}

interface TProfile {
    photoURL: string,
    name: string,
    division: string,
    desc: string,
    type: "profile"
}

interface TPhoto {
    photoURLs: string[],
    desc: string,
    type: "photo"
}

interface TPlace {
    imageURL: string,
    placeId: number,
    type: "place"
}

function ArticleTestPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const ThumbnailWrapperRef = useRef<HTMLDivElement>(null);
    const stationRefs = useRef<null[] | HTMLDivElement[]>([]);

    const {Modal, modalOpen, modalClose, isOpend} = useModal({});
    const {ScrapModal, scrapModalOpen, scrapModalClose} = useScrapModal({
        id: Number(id),
        type: "article"
    });
    const {Alert, alertOpen, alertClose} = useAlert({
        Content: <Typography.Title size="md" color="white">URL이 복사되었습니다.</Typography.Title>,
    });

    useEffect(() => {
        if(localStorage.getItem('access_token')) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [])

    return(
        <>
        {data && 
            <PageTemplate nav={<BottomNav postId="123" isClap={data.isClapped} claps={data.claps} comment={data.commentCount} onScrapClick={() => {scrapModalOpen()}} onCommentClick={() => {modalOpen()}} bookmark={data.bookmark} onShareClick={() => {alertOpen()}}/>}>
                <Alert />
                <ScrapModal />
                <S.ModalWrapper isOpen={isOpend}>
                    <Modal>
                        <Comment id={1} commentInputPosition="bottom"/>
                    </Modal>
                </S.ModalWrapper>

                <S.BackButtonWrapper>
                    <BackButton />
                </S.BackButtonWrapper>
                <S.ThumbnailWrapper ref={ThumbnailWrapperRef}>
                    <img src="123.png" />
                </S.ThumbnailWrapper>
                <S.Header paddingTop={ThumbnailWrapperRef.current?.offsetHeight}>
                    <S.Type>
                        Article by. 가보자고
                    </S.Type>
                    <S.Title>
                        {data.title}
                    </S.Title>
                </S.Header>
                <S.StationContainer>
                    <S.StationTitle>Station 보기</S.StationTitle>
                    <StationContainer data={JSON.parse(data.content).data.filter((content : TEditor | TInterview | TPhoto | TPlace | TProfile | TStation) => content.type === "station").map((content: TStation) => content.name)} refs={stationRefs}/>
                    <S.Content isLogin={isLogin}>
                    {
                        JSON.parse(data.content).data.map((content : TEditor | TInterview | TPhoto | TPlace | TProfile | TStation) => {
                            switch (content.type){
                                case "station":
                                    return <ContentStation index={content.index} name={content.name} refs={stationRefs}/>
                                case "editor" :
                                    return <Editor content={content.content !== undefined ? content.content : "error"} />
                                case "interview":
                                    return <Interview content={content.content !== undefined ? content.content : "error"} />
                                case "profile":
                                    return <InterviewProfile photoURL={content.photoURL} name={content.name} division={content.division} desc={content.desc} />
                                case "photo":
                                    return <PlacePhoto photoURLs={content.photoURLs} desc={content.desc} />
                                case "place":
                                    return <PlaceInfo placeId={content.placeId} imageURL={content.imageURL}/>
                            }
                        })
                    }
                    <CheckPoints data={JSON.parse(data.checkpoint).data} />
                    <S.NextArticle>
                        <span>2편 : <Link to={`/article/${data.nextArticle.id}`}>‘{data.nextArticle.name}’</Link> 이어보기</span>
                    </S.NextArticle>
                    </S.Content>
                </S.StationContainer>
                    {
                        !isLogin &&
                        <S.IsLoginBlur>
                            <Typography.Title size="lg" color="inherit" noOfLine={2}>아티클의 전문이 궁금하다면?<br />가보자고 회원으로 다양한 콘텐츠를 즐겨보세요!</Typography.Title>
                            <DoubleChevronBottom />
                            <S.LoginLinkButton onClick={() => {navigate("/login")}}>
                                <Typography.Title size="lg" color="white">회원가입하고 모두 보기</Typography.Title>
                            </S.LoginLinkButton>
                        </S.IsLoginBlur>
                    }
            </PageTemplate>
        }
        </>
    )
}

export default ArticleTestPage;