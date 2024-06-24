export type userReviewType = {
  title: string;
  type: string;
  claps: number;
  comments: number;
  thumbnailURL?: string;
};

export const userReviewData: userReviewType[] = [
  {
    title: '[게시글] 블라블라블라',
    type: 'post',
    claps: 123,
    comments: 123,
  },
  {
    title: '[영상] 블라블라블라',
    type: 'video',
    claps: 123,
    comments: 123,
  },
  {
    title: '[사진] 블라블라블라',
    type: 'photo',
    claps: 123,
    comments: 123,
  },
];

export type userClapsType = {
  title: string;
  username: string;
  claps: number;
  comments: number;
  thumbnailURL?: string;
  avatarURL?: string;
};

export const userClapsData: userClapsType[] = [
  {
    title: '제목 123',
    username: 'USERNAME',
    claps: 123,
    comments: 123,
  },
  {
    title: '제목 123',
    username: 'USERNAME',
    claps: 123,
    comments: 123,
  },
  {
    title: '제목 123',
    username: 'USERNAME',
    claps: 123,
    comments: 123,
  },
  {
    title: '제목 123',
    username: 'USERNAME',
    claps: 123,
    comments: 123,
  },
];

export type userCommentsType = {
  postName: string;
  comment: string;
};

export const userCommentsData: userCommentsType[] = [
  {
    postName: '게시글 제목',
    comment: '작성한 댓글 내용',
  },
  {
    postName: '게시글 제목',
    comment: '작성한 댓글 내용',
  },
  {
    postName: '게시글 제목',
    comment: '작성한 댓글 내용',
  },
  {
    postName: '게시글 제목',
    comment: '작성한 댓글 내용',
  },
  {
    postName: '게시글 제목',
    comment: '작성한 댓글 내용',
  },
];
