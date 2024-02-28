export interface userDataType {
    id: string,
    name:string,
    follower: number;
    following: number;
    reviews: number;
    hearts:number;
    views:number;
    desc: string;
}

export const userData:userDataType = {
    id: "1",
    name: "최민석",
    follower: 123,
    following: 456,
    reviews: 7,
    hearts: 89,
    views: 100,
    desc: "안녕하세요! 저는 여행관련 스타트업을 운영하고 있습니다:) 제가 좋아하는 여행지, 그리고 음식을 소개합니다!",
}