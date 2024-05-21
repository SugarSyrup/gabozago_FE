import * as S from "./style";
import React, { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { useParams } from "react-router-dom";
import { get } from "../../../utils/api";
import Typography from "../../../components/common/Typography";

interface TData {
  title: string;
  createdAt: string;
  content: string;
}

function AnnounceDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>({
    title: "공지사항2",
    createdAt: "2024-04-12",
    content:
      "안녕하세요, 가보자고 입니다. <br/>가보자고 서비스를 이용해주시는 회원분들께 감사드리며, 이용약관 개정에 대한 주요내용을 안내드리오니 서비스 이용에 참고하시기 바랍니다.",
  });

  useEffect(() => {
    get<TData>(`/settings/support/announcement/${id}`
    ).then(({ data }) => setData(data));
  }, []);

  return (
    <PageTemplate nav={false} header={<PageHeader><Typography.Title size="lg">{data.title}</Typography.Title></PageHeader>}>
      <S.Container>
        <S.InfoContainer>
                <p className="title"><Typography.Title size="md" color="inherit">{data.title}</Typography.Title></p>
                <p className="date"><Typography.Label size="lg" color="inherit">{data.createdAt.replace("-", ". ").replace("-", ". ")}</Typography.Label></p>
        </S.InfoContainer>
        <S.ContentsContainer>
          <Typography.Body size="md" color="inherit" noOfLine={1000}>{data.content}</Typography.Body>
        </S.ContentsContainer>
      </S.Container>
    </PageTemplate>
  );
}

export default AnnounceDetailPage;
