export interface userDataType {
    id: string,
    name:string,
    follower: number;
    following: number;
    reviews: number;
    hearts:number;
    views:number;
}

export const userData:userDataType = {
    id: "1",
    name: "최민석",
    follower: 123,
    following: 456,
    reviews: 7,
    hearts: 89,
    views: 100,
}