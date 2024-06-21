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
    title: "",
    createdAt: "",
    content: "",
  });

  useEffect(() => {
    get<TData>(`/settings/support/announcement/${id}`).then(({ data }) =>
      setData(data)
    );
  }, []);

  return (
    <PageTemplate
      nav={false}
      header={
        <PageHeader>
          <Typography.Title size="lg">공지사항</Typography.Title>
        </PageHeader>
      }
    >
      <S.Container>
        <S.InfoContainer>
          <p className="title">
            <Typography.Title size="md" color="inherit">
              {data.title}
            </Typography.Title>
          </p>
          <p className="date">
            <Typography.Label size="lg" color="inherit">
              {data.createdAt.replace("-", ". ").replace("-", ". ")}
            </Typography.Label>
          </p>
        </S.InfoContainer>
        <S.ContentsContainer>
          <Typography.Body size="md" color="inherit" noOfLine={1000}>
            {data.content.split("\n").map((line) => (
              <p>{line}</p>
            ))}
          </Typography.Body>
        </S.ContentsContainer>
      </S.Container>
    </PageTemplate>
  );
}

export default AnnounceDetailPage;
