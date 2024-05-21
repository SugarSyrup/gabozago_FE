import * as S from "./style";
import { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { useParams } from "react-router-dom";
import { get } from "../../../utils/api";

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

export default FAQDetailPage;
