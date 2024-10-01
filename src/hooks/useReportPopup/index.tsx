import { FormEvent } from 'react';
import toast from 'react-hot-toast';

import Typography from '../../components/common/Typography';
import { ReportToast } from '../../components/common/Toast';
import { post } from '@_utils/api';

import usePopup from '../usePopup';
import * as S from './style';
import { useSetRecoilState } from 'recoil';
import { popupValue } from '@_recoil/common/PopupValue';

interface Options {
  type: 'short-form' | 'article' | 'video' | 'report' | 'travelog';
  postId?: number | null;
  commentId?: number | null;
  setIsReported?: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: () => void;
}

function useReportPopup({
  type,
  postId = null,
  commentId = null,
  setIsReported,
  refresh,
}: Options) {
  const { Popup, popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);
  const reasons = [
    '욕설 / 비방',
    '차별 / 혐오',
    '저작권 침해',
    '음란 / 유해',
    '개인 정보 유포 / 거래',
    '상업적 스팸',
    '기타',
  ];

  const sendReport = async (reason: string, opinion: string | null = null) => {
    try {
      const { data } = await post<{
        message: 'Post report success' | 'Comment report success';
      }>(
        `/community/${type}/report`,
        {
          reason,
          opinion,
        },
        {
          params: {
            post_id: postId,
            comment_id: commentId,
          },
        },
      );

      if (data.message === 'Comment report success' || data.message === 'Post report success') {
        if (setIsReported) {
          setIsReported(true);
        }

        toast.custom(() => <ReportToast />);
        refresh();
        popupClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    if (formData.get('reportReason')) {
      sendReport(formData.get('reportReason') as string);
    }
  };

  function ReportPopup() {
    return (
      <>
        <S.PopupConatiner>
          <S.ReportForm onSubmit={onSubmit}>
            <Typography.Title size="lg">신고하기</Typography.Title>
            <S.ReasonList>
              {reasons.map((item, index) => (
                <S.ResonItem key={`reportReason-${index}`}>
                  <S.RadioInput
                    type="radio"
                    id={`reason-${index}`}
                    name="reportReason"
                    defaultChecked={index === 0}
                    value={item}
                  />
                  <Typography.Body size="lg">
                    <S.RadioLabel htmlFor={`reason-${index}`}>{item}</S.RadioLabel>
                  </Typography.Body>
                </S.ResonItem>
              ))}
            </S.ReasonList>
            <S.ControlBox>
              <S.Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  popupClose();
                }}
              >
                취소
              </S.Button>
              <S.Button type="submit" primary>
                신고하기
              </S.Button>
            </S.ControlBox>
          </S.ReportForm>
        </S.PopupConatiner>
      </>
    );
  }
  return {
    reportPopupOpen: () => {
      setPopupUI({
        NoTemplateCustom: <ReportPopup />,
      });
      popupOpen();
    },
    reportPopupClose: popupClose,
  };
}

export default useReportPopup;
