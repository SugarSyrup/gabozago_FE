import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useSearchParams } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import TabBar from "../../../components/common/TabBar";

import Journals from "../../../components/home/journals/Journals";
import Recommendation from "../../../components/home/Recommendation";
import Articles from "../../../components/home/Articles";

import * as S from "./style";
import useAlert from "../../../hooks/useAlert";
import Typography from "../../../components/common/Typography";
import { loginAlertState } from "../../../recoil/loginAlertState";

function HomePage() {
  const [query] = useSearchParams();
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(
    query.get("tab") ? Number(query.get("tab")) : 0
  );
  const navigate = useNavigate();
  const [isLoginAlertState, setIsLoginAlertState] =
    useRecoilState(loginAlertState);
  const { Alert, alertOpen } = useAlert({
    Content: (
      <Typography.Body size="lg" color="white">
        로그인이 필요한 서비스에요.
      </Typography.Body>
    ),
    RightContent: (
      <Typography.Body size="lg" color="white">
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 하러가기
        </span>
      </Typography.Body>
    ),
  });
  const tabs = [
    { id: "추천", name: "추천", content: <Recommendation /> },
    { id: "아티클", name: "아티클", content: <Articles /> },
    { id: "숏폼", name: "숏폼", content: <Journals /> },
  ];

  useEffect(() => {
    if (isLoginAlertState) {
      alertOpen();
      setIsLoginAlertState(false);
    }
  }, []);

  return (
    <PageTemplate
      header={
        <S.Header>
          <TabBar
            tabs={tabs}
            focusedTabIndex={focusedTabIndex}
            setFocusedTabIndex={setFocusedTabIndex}
            widthStyle="fit-content"
            fontSize="20px"
            color="#424242"
          />
        </S.Header>
      }
    >
      <Alert />
      {tabs[focusedTabIndex].content}
    </PageTemplate>
  );
}

export default HomePage;
