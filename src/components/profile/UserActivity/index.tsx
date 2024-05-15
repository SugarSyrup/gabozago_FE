import { useEffect, useRef, useState } from "react";

import * as S from "./style";

import UserActivityFilter from "../UserActivityFilter";
import UserClapsPostList from "../UserClapsPostList";
import UserCommentsList from "../UserCommentsList";

import { post } from "../../../utils/api";

export interface articleResponseType {
    next: string | null,
    previous: string | null,
    results: {
        id: number,
        title: string,
        nickname: string,
        avatarURL: string,
        thumbnailURL: string,
        clapCount: number,
        commentCount: number,
    }[]
}

export interface shortsResponseType {
    next: string | null,
    previous: string | null,
    results: {
        id: number,
        title: string,
        nickname: string,
        avatarURL: string,
        videoId: string,
        reactionCount: number,
        commentCount: number,
    }[]
}

export interface commentsResponseType {
    next: string | null,
    previous: string | null,
    results: {
        id: number,
        comment:string,
        title:string,
    }[]
}

function UserActivity() {
    const [actFilter, setActFilter] = useState<"clap" | "comment">("clap");
    const [postFilter, setPostFilter] = useState<"short-form" | "article">("article");
    const [next, setNext] = useState<string>("");
    const [data, setData] = useState<articleResponseType | shortsResponseType | commentsResponseType>();
    const dataContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        post<articleResponseType | shortsResponseType | commentsResponseType>(`${import.meta.env.VITE_BASE_URL}user/profile/my-activity`, {
            sort: actFilter,
            community: postFilter,
        }).then((response) => {
            //[SugarSyrup] @TODO: 백엔드 아직 미 업데이트! -> Filter 마다 data 저장해서 rendering 구현 하기
            //[SugarSyrup] @TODO: 백엔드 아직 미 업데이트! -> next 상태 저장
        })
    }, [actFilter, postFilter])

    useEffect(() => {
        let observer = new IntersectionObserver(() => {});

        if(dataContainerRef.current) {
            observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting) {
                    post<articleResponseType | shortsResponseType | commentsResponseType>(next).then((response) => {
                        //[SugarSyrup] @TODO: 백엔드 아직 미 업데이트! -> Next Data 이전 상태에서 뒤에 추가하기!
                    })      
                }
            }, { threshold: [0.8]})
    
            observer.observe(dataContainerRef.current)
        }

        return () => {
            observer && observer.disconnect()
        };
    }, [next, dataContainerRef])

    return (
        <S.Container>
            <UserActivityFilter setActFilter={setActFilter} setPostFilter={setPostFilter}/>
            <div ref={dataContainerRef}>
            {
                data !== undefined &&
                actFilter === "clap" ?
                    postFilter === "short-form" ?
                    <UserClapsPostList data={data.results as shortsResponseType['results']} type="short-form"/>
                    :
                    <UserClapsPostList data={data.results as articleResponseType['results']} type="article"/>
                :
                data !== undefined &&
                <UserCommentsList data={data.results as commentsResponseType['results']} type={postFilter}/>
            }
            </div>
        </S.Container>
    );
}

export default UserActivity;