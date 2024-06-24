import useAlert from '../../../hooks/useAlert';
import CalendarAddIcon from '../../../assets/icons/calendar_add_border.svg?react';

import * as S from './style';

interface Props {
  text: string;
  onClick: () => void;
}

function usePlaceAlert({ text, onClick }: Props) {
  const { Alert, alertOpen, alertClose } = useAlert({
    LeftContent: <CalendarAddIcon />,
    Content: <S.ContentText>{text}</S.ContentText>,
    RightContent: (
      <S.ModalOpen
        onClick={() => {
          onClick();
        }}
      >
        변경하기
      </S.ModalOpen>
    ),
  });

  return {
    PlaceAlert: Alert,
    placeAlertOpen: alertOpen,
    placeAlertClose: alertClose,
  };
}

export default usePlaceAlert;
