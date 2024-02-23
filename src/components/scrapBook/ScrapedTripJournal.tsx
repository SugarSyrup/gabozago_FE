import { useEffect } from "react";
import * as S from "../../styles/scrapBook/ScrapedTripJournal.style";
import addCircle from "../../assets/icons/add_circle.svg";
import { useNavigate } from "react-router-dom";

interface JournalGroup {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  journals: Journal[];
}
interface Journal {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  thumbnail: string;
  location: string[]; // 지역
  theme?: string; // 여행 테마
  headCount?: number; // 인원
  budget?: number; // 여행 경비
  departureDate?: string; // 여행 출발 날짜
  arrivalDate?: string; // 여행 도착 날짜
  like: number; // 리스펙 수
  scraped: number; // 스크랩 수
  viewCount: number; // 조회수
}

function ScrapedTripJournal() {
  const navigate = useNavigate();
  const journalsByGroup: JournalGroup[] = [
    {
      id: "20221010120409",
      title: "부산",
      createdAt: "20221010120408",
      updatedAt: "20221010120410",
      journals: [
        {
          id: "20221010120410",
          title: "서울다녀왔음",
          createdAt: "20221010120410",
          updatedAt: "20221010120410",
          username: "사자",
          thumbnail: "https://placehold.co/600x400?text=Hello+World",
          location: ["서울"], // 지역
          theme: "힐링", // 여행 테마
          headCount: 1, // 인원
          budget: 300000, // 여행 경비
          departureDate: "20221010120410", // 여행 출발 날짜
          arrivalDate: "20221020120510", // 여행 도착 날짜
          like: 30, // 리스펙 수
          scraped: 50, // 스크랩 수
          viewCount: 230, // 조회수
        },
      ],
    },
    {
      id: "20221010120408",
      title: "서울",
      createdAt: "20221010120408",
      updatedAt: "20221010120410",
      journals: [
        {
          id: "20221010120410",
          title: "서울다녀왔음",
          createdAt: "20221010120410",
          updatedAt: "20221010120410",
          username: "사자",
          thumbnail: "",
          location: ["서울"], // 지역
          theme: "힐링", // 여행 테마
          headCount: 1, // 인원
          budget: 300000, // 여행 경비
          departureDate: "20221010120410", // 여행 출발 날짜
          arrivalDate: "20221020120510", // 여행 도착 날짜
          like: 30, // 리스펙 수
          scraped: 50, // 스크랩 수
          viewCount: 230, // 조회수
        },
      ],
    },
    {
      id: "20221010120408",
      title: "서울",
      createdAt: "20221010120408",
      updatedAt: "20221010120410",
      journals: [
        {
          id: "20221010120410",
          title: "서울다녀왔음",
          createdAt: "20221010120410",
          updatedAt: "20221010120410",
          username: "사자",
          thumbnail: "",
          location: ["서울"], // 지역
          theme: "힐링", // 여행 테마
          headCount: 1, // 인원
          budget: 300000, // 여행 경비
          departureDate: "20221010120410", // 여행 출발 날짜
          arrivalDate: "20221020120510", // 여행 도착 날짜
          like: 30, // 리스펙 수
          scraped: 50, // 스크랩 수
          viewCount: 230, // 조회수
        },
      ],
    },
  ];

  useEffect(() => {
    // user의 여행기 스크랩 목록 가져오기
  }, []);

  return (
    <S.GroupList>
      {journalsByGroup.map((group) => (
        <S.GroupItem
          key={group.id}
          background={
            group.journals.length !== 0 ? group.journals[0].thumbnail : ""
          }
          onClick={() => {
            navigate(`./${group.id}`);
          }}
        >
          <div></div>
          <p>{group.title}</p>
        </S.GroupItem>
      ))}
      <S.CreateNewGroupItem key={"createGroup"} background={addCircle}>
        <div
          onClick={() => {
            alert("새 그룹 생성");
          }}
        ></div>
        <p>새 그룹 만들기</p>
      </S.CreateNewGroupItem>
    </S.GroupList>
  );
}

export default ScrapedTripJournal;
