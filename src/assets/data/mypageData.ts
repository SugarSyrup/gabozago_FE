export const myTripData = [
    {
        name:"포레 워크샵",
        location: "부산광역시",
        startDate: "2024.1.5",
        endDate: "2024.1.8"
    },
    {
        name:"포레 워크샵",
        location: "부산광역시",
        startDate: "2024.1.5",
        endDate: "2024.1.8"
    },
    {
        name:"포레 워크샵",
        location: "부산광역시",
        startDate: "2024.1.5",
        endDate: "2024.1.8"
    },
]

export type myReviewType = {
    title: string;
    type: string;
    claps: number;
    comments: number;
    thumbnailURL?: string;
}

export const myReviewData:myReviewType[] = [
    {
        title: "[게시글] 블라블라블라",
        type: "post",
        claps: 123,
        comments: 123,
    },
    {
        title: "[영상] 블라블라블라",
        type:"video",
        claps: 123,
        comments: 123,
    },
    {
        title: "[사진] 블라블라블라",
        type:"photo",
        claps: 123,
        comments: 123,
    },
]

export type myClapsType = {
    title: string;
    username: string;
    claps: number;
    comments: number;
    thumbnailURL?: string;
    avatarURL?: string;
}

export const myClapsData:myClapsType[] = [
    {
        title: "제목 123",
        username: "USERNAME",
        claps: 123,
        comments: 123,
    },
    {
        title: "제목 123",
        username: "USERNAME",
        claps: 123,
        comments: 123,
    },
    {
        title: "제목 123",
        username: "USERNAME",
        claps: 123,
        comments: 123,
    },
    {
        title: "제목 123",
        username: "USERNAME",
        claps: 123,
        comments: 123,
    },
]
