import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import Typography from "../../../components/common/Typography";
import { get } from "../../../utils/api";

import * as S from "./style";

interface TData {
  title: string;
  category: string;
  createdAt: string;
  content: string;
}

function FAQDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>({
    title: "-",
    category: "-",
    createdAt: "0000-00-00",
    content: "-",
  });

  useEffect(() => {
    get<{
      next: string;
      previous: string;
      results: TData;
    }>(`/settings/support/help/faq/${id}`).then(
      ({ data }) => setData(data.results)
    );
  }, []);

  return (
    <PageTemplate nav={false} header={<PageHeader><Typography.Title size="lg">고객센터/도움말</Typography.Title></PageHeader>}>
      <S.Container>
        <S.InfoContainer>
                <p className="title"><Typography.Title size="md" color="inherit">{data.title}</Typography.Title></p>
                <p className="date"><Typography.Label size="lg" color="inherit">{data.createdAt.replace("-", ". ").replace("-", ". ")}</Typography.Label></p>
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

export default FAQDetailPage;
