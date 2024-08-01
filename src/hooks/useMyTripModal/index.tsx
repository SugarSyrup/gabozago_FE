import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import Typography from '../../components/common/Typography';
import InfomationIcon from '../../assets/icons/exclamation_circle.svg?react';
import { deletes, patch } from '@_utils/api';

import useModal from '../useModal';
import usePopup from '../usePopup';

import * as S from './style';
import { datesState } from '../../recoil/mytrip/createData';
import { createTravelState } from '../../recoil/mytrip/createTravelState';
import { popupCustomSelector, popupValue } from '@_recoil/common/PopupValue';

interface Props {
  id: number;
  title: string;
  departureDate: string;
  arrivalDate: string;
}

function useMyTripModal({ id, title, departureDate, arrivalDate }: Props) {
  const navigate = useNavigate();
  const setCreateTravelState = useSetRecoilState(createTravelState);
  const { Modal, modalOpen, modalClose, isOpend: isModalOpend } = useModal({});
  const { Popup, popupOpen, popupClose, isOpend: isPopupOpend } = usePopup();
  const [popupType] = useState<'CHANGE' | 'DELETE'>('CHANGE');
  const setDates = useSetRecoilState(datesState);
  const setPopupValue = useSetRecoilState(popupValue);
  const setCustomPopup = useSetRecoilState(popupCustomSelector);

  function MyTripModal() {
    return (
      <S.ModalWrapper isOpen={isModalOpend || isPopupOpend}>
        <Popup>
          {popupType === 'DELETE' ? (
            <S.PopupContainer>
              <InfomationIcon />
              <S.PopupText>
                <Typography.Headline size="sm" noOfLine={2}>
                  "{title}
                  "을 삭제하시겠어요?
                </Typography.Headline>
                <Typography.Body size="lg" color="#727272">
                  삭제한 여행 일정은 되돌릴 수 없습니다.
                </Typography.Body>
              </S.PopupText>
              <S.PopupButtons>
                <S.PopupButton
                  onClick={() => {
                    popupClose();
                  }}
                >
                  <Typography.Body size="lg">아니요</Typography.Body>
                </S.PopupButton>
                <S.PopupButton
                  onClick={() => {
                    deletes<{ message: string }>('/my-travel', { id }).then((response) => {
                      if (response.data.message === 'DELETE SUCCESS') {
                        modalClose();
                        popupClose();
                        navigate(0);
                      }
                    });
                  }}
                >
                  <Typography.Body size="lg" color="#5276FA">
                    네, 삭제할래요
                  </Typography.Body>
                </S.PopupButton>
              </S.PopupButtons>
            </S.PopupContainer>
          ) : (
            <S.ChangePopupContainer
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                patch('/my-travel', {
                  id,
                  title: formData.get('title'),
                }).then(() => {
                  popupClose();
                  navigate(0);
                });
              }}
            >
              <S.ChangePopupHeader>
                <Typography.Title size="sm">일정 제목 변경</Typography.Title>
                <S.FormButton>
                  <Typography.Title size="sm" color="#5276FA">
                    저장
                  </Typography.Title>
                </S.FormButton>
              </S.ChangePopupHeader>
              <S.ChangePopupInput defaultValue={title} name="title" type="text" maxLength={38} />
            </S.ChangePopupContainer>
          )}
        </Popup>
        <Modal>
          <S.TravelSettings>
            <div
              onClick={() => {
                modalClose();
                setPopupValue({
                  Icon: <InfomationIcon />,
                  Header: `'${title}'을(를) 삭제하시겠어요?`,
                  Description: '삭제한 여행 일정은 되돌릴 수 없습니다.',
                  ConfirmButton: {
                    text: '네, 삭제할래요',
                    onClick: () => {
                      deletes<{ message: string }>('/my-travel', { id }).then((response) => {
                        if (response.data.message === 'DELETE SUCCESS') {
                          modalClose();
                          popupClose();
                          navigate(0);
                        }
                      });
                    },
                  },
                  CloseButton: {
                    text: '아니요',
                    onClick: () => {
                      popupClose();
                    },
                  },
                });
                popupOpen();
              }}
            >
              <Typography.Title size="lg">여행 기록 삭제</Typography.Title>
            </div>
            <div
              onClick={() => {
                modalClose();
                // setPopupType('CHANGE');
                setCustomPopup(
                  <S.ChangePopupContainer
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      patch('/my-travel', {
                        id,
                        title: formData.get('title'),
                      }).then(() => {
                        popupClose();
                        navigate(0);
                      });
                    }}
                  >
                    <S.ChangePopupHeader>
                      <Typography.Title size="sm">일정 제목 변경</Typography.Title>
                      <S.FormButton>
                        <Typography.Title size="sm" color="#5276FA">
                          저장
                        </Typography.Title>
                      </S.FormButton>
                    </S.ChangePopupHeader>
                    <S.ChangePopupInput
                      defaultValue={title}
                      name="title"
                      type="text"
                      maxLength={38}
                    />
                  </S.ChangePopupContainer>,
                );
                popupOpen();
              }}
            >
              <Typography.Title size="lg">여행 제목 변경</Typography.Title>
            </div>
            <div
              onClick={() => {
                setDates({
                  startDate: departureDate.replace('-', '').replace('-', ''),
                  endDate: arrivalDate.replace('-', '').replace('-', ''),
                });
                setCreateTravelState('edit');
                navigate(`/mytrip/${id}/dateChange`);
              }}
            >
              <Typography.Title size="lg">여행 날짜 변경</Typography.Title>
            </div>
          </S.TravelSettings>
        </Modal>
      </S.ModalWrapper>
    );
  }

  return {
    MyTripModal,
    modalOpen,
    modalClose,
    isModalOpend,
  };
}

export default useMyTripModal;
