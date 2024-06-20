import { useNavigate } from 'react-router-dom';
import LeftChevronIcon from '../../assets/icons/chevron_left.svg?react';

function BackButton() {
  const navigate = useNavigate();
  return (
    <LeftChevronIcon
      onClick={() => {
        navigate(-1);
      }}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default BackButton;
