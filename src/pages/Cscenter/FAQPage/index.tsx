import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../../components/common/PageTemplate';

function FAQPage() {
  const navigate = useNavigate();
  return <PageTemplate nav={false} />;
}

export default FAQPage;
