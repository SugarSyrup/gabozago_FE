import * as S from "./style";
import { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";

function InquiryHistoryPage() {
  const [data, setData] = useState<
    {
      id: string;
      title: string;
      date: string;
      status: "01" | "02";
    }[]
  >([
    {
      id: "0",
      title:
        "긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어",
      date: "2024-03-18",
      status: "01",
    },
    {
      id: "20",
      title:
        "짧은단어짧은단어짧은단어 긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어",
      date: "2024-03-18",
      status: "02",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <PageTemplate nav={false} header={<PageHeader>내 문의 내역</PageHeader>}>
      <S.List>
        {data.map(({ id, title, date, status }) => (
          <li>
            <p>{title}</p>
            <div>
              <S.StatusSpan type={status === "01" ? "active" : "inactive"}>
                {status === "01" ? "답변대기" : "답변완료"}
              </S.StatusSpan>
              <S.DateSpan>{date}</S.DateSpan>
            </div>
          </li>
        ))}
      </S.List>
    </PageTemplate>
  );
}

export default InquiryHistoryPage;
