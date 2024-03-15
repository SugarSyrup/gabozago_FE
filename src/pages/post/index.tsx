import AvatarIcon from "../../assets/icons/user.svg?react";

import PageTemplate from "../../components/common/PageTemplate";
import Summary from "../../components/post/Summary";
import Routes from "../../components/post/Routes";
import BottomNav from "../../components/post/BottomNav";
import Place from "../../components/post/Place";

import * as S from "./style";
import Comment from "../../components/journal/Comment";

const data = {
    postId: "1",
    thumbnailURL:"",
    title: "제목 최대 360, 두 줄 까지 ok",
    
    isClap:false,
    claps:123,
    comment:123,
    bookmark: 123,
    shares: 123,

    author:{
        userId: "1",
        name:"USER",
        createdAt: "2023-01-16",
        isFollowed: false
    },

    summary: {
        locations: ["부산", "울산", "대구", "경주"],
        people: 2,
        schedule: 3,
        budget: 20,
        seasons: ["봄", "여름"],
        themes: ["도보여행", "가족여행", "애견동반", "자연"]
    },

    routes: [
        {
            day: 1,
            places: [
                {
                    id:"1",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"2",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"3",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"4",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"5",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"6",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"7",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"8",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"9",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"10",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
            ]
        },
        {
            day: 2,
            places: [
                {
                    id:"1",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"2",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"3",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"4",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"5",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                }
            ]
        },
        {
            day: 3,
            places: [
                {
                    id:"1",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                }
            ]
        },
        {
            day: 4,
            places: [
                {
                    id:"1",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"2",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                }
            ]
        },
        {
            day: 5,
            places: [
                {
                    id:"1",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"2",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"3",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
                {
                    id:"4",
                    name:"TEXT",
                    thumbnailURL:"",
                    content: "서귀포 한적하게 동백을 만날 수 있는 ‘볼고롱동백‘ 가족단위로 방문할 때 금액에 부담이 없는 볼고롱동백 바로 옆 동백수목원에 비해 가격도 저렴하고, 인파도 적기 때문에 한적해서 영상찍기에 너무 좋아요.",
                    photosURL: []
                },
            ]
        },
    ]
}

function PostPage() {
    return(
        <S.PageContainer>
            <S.Header>
                <S.ThumbnailWrapper src={data.thumbnailURL}/>
                <S.Type>여행기</S.Type>
                <S.Title>{data.title}</S.Title>
                <S.UserContainer>
                    <AvatarIcon />
                    <S.UserInfo>
                        <S.Name>{data.author.name}</S.Name>
                        <S.Date>{data.author.createdAt}</S.Date>
                    </S.UserInfo>
                    {
                        data.author.isFollowed ? 
                        <></>
                        :
                        <S.FollowBtn>+ 팔로우</S.FollowBtn>
                    }
                </S.UserContainer>
            </S.Header>
            <S.Contents>
                <Summary {...data.summary} />                
                <Routes data={data.routes} />

                {
                    data.routes.map((route) => 
                        <>
                            <S.Day>
                                <span>Day {route.day}</span>
                                <S.DayLink to="/123/123">코스 저장하기</S.DayLink>
                            </S.Day>
                            {
                                route.places.map((place, idx) => 
                                    <Place 
                                        index={idx+1}
                                        {...place}
                                    />
                                )
                            }
                        </>
                    )
                }
            </S.Contents>
            <S.Comments>
                <Comment />
            </S.Comments>
            <BottomNav postId={data.postId} isClap={data.isClap} claps={data.claps} comment={data.comment} bookmark={data.bookmark} shares={data.shares} />
        </S.PageContainer>
    );
}

export default PostPage;