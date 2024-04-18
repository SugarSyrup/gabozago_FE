import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import { useNavigate } from "react-router-dom";

function FAQPage() {
  const navigate = useNavigate();
  return <PageTemplate nav={false}></PageTemplate>;
}

export default FAQPage;
