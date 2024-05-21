import * as S from "./style";
import { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { Link } from "react-router-dom";
import { get } from "../../../utils/api";

interface TData {
  id: number;
  title: string;
  createdAt: string;
}

function AnnouncePage() {
  const [data, setData] = useState<TData[]>([
    {
      id: 2,
      title: "공지사항2",
      createdAt: "2024-04-12",
    },
    {
      id: 1,
      title: "공지사항1",
      createdAt: "2024-04-12",
    },
  ]);

  useEffect(() => {
    get<{
      next: string;
      previous: string;
      results: TData[];
    }>(`/settings/support/announcement`).then(
      ({ data }) => setData(data.results)
    );
  }, []);

  return (
    <PageTemplate nav={false} header={<PageHeader>공지사항</PageHeader>}>
      <S.Container>
        <S.OrderedList>
          {data.map(({ id, title, createdAt }) => (
            <S.ListItem>
              <Link to={`./${id}`}>
                <p className="title">{title}</p>
                <p className="date">{createdAt}</p>
              </Link>
            </S.ListItem>
          ))}
        </S.OrderedList>
      </S.Container>
    </PageTemplate>
  );
}

export default AnnouncePage;
