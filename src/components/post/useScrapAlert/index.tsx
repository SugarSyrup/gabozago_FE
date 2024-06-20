import useAlert from '../../../hooks/useAlert';
import CalendarAddIcon from '../../../assets/icons/calendar_add_border.svg?react';

import * as S from './style';

interface Props {
  onClick: () => void;
}

function useScrapAlert({ onClick }: Props) {
  const { Alert, alertOpen, alertClose } = useAlert({
    LeftContent: <CalendarAddIcon />,
    Content: <S.ContentText>스크랩이 완료되었습니다.</S.ContentText>,
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
    ScrapAlert: Alert,
    scrapAlertOpen: alertOpen,
    scrapAlertClose: alertClose,
  };
}

export default useScrapAlert;
