import * as S from "./style";
import { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { useParams } from "react-router-dom";

interface TData {
  title: string;
  category: string;
  createdAt: string;
  content: string;
}

function CSCenterDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>({
    title: "내 스크랩을 친구에게 공유하고 싶어요.",
    category: "서비스/기타",
    createdAt: "2024-04-12",
    content:
      "안녕하세요, 가보자고 입니다.\n가보자고 서비스를 이용해주시는 회원분들께 감사드리며, 이용약관 개정에 대한 주요내용을 안내드리오니 서비스 이용에 참고하시기 바랍니다.",
  });

  useEffect(() => {
    // @todo: 공지사항 상세 데이터 불러오기
  }, []);

  return (
    <PageTemplate nav={false} header={<PageHeader>고객센터/도움말</PageHeader>}>
      <S.Container>
        <S.InfoContainer>
          <p className="title">{data.title}</p>
          <p className="date">{data.createdAt}</p>
        </S.InfoContainer>
        <S.ContentsContainer>
          {data.content.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </S.ContentsContainer>
      </S.Container>
    </PageTemplate>
  );
}

export default CSCenterDetailPage;
