import { useEffect, useState } from 'react';

import ChevronTopIcon from '../../../assets/icons/chevron_top.svg?react';
import ChevronBottomIcon from '../../../assets/icons/chevron_bottom.svg?react';

import * as S from './style';

interface Props {
  opening_hours: string;
}

function PlaceOperateTime({ opening_hours }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOperate, setIsOperate] = useState(false);
  const [displayEndTime, setDisplayEndTime] = useState<string>('');
  const [data, setData] = useState<string[][]>();
  const date = new Date();

  useEffect(() => {
    setData(opening_hours.split('\n').map((item) => item.split(': ')));
  }, []);

  function seperateTypeNTime({ item }: { item: string }) {
    const [startType, startTime] = item.split('~')[0].split(' ');
    let endType = '';
    let endTime = '';

    if (!item.split('~')[1].includes(' ')) {
      endType = startType;
      endTime = item.split('~')[1];
    } else {
      const [, tmpEndType, tmpEndTime] = item.split('~')[1].split(' ');
      endType = tmpEndType;
      endTime = tmpEndTime;
    }

    return {
      startType,
      startTime,
      endType,
      endTime,
    };
  }

  function transformTime({ type, time }: { type: string; time: string }) {
    return type === '오전' ? Number(time.split(':')[0]) : Number(time.split(':')[0]) + 12;
  }

  function isOperateFn({ startTime, endTime }: { startTime: number; endTime: number }) {
    if (startTime > endTime) {
      return date.getHours() > startTime && date.getHours() < endTime + 24;
    }
    return date.getHours() > startTime && date.getHours() < endTime;
  }

  function calculateEndTime({
    operateTimeInfo,
    isYesterday = false,
  }: {
    operateTimeInfo: string;
    isYesterday?: boolean;
  }) {
    if (operateTimeInfo === '휴무일') {
      return {
        flag: false,
        displayEndTime: '휴무일',
      };
    }
    if (operateTimeInfo === '24시간 영업') {
      return {
        flag: true,
        displayEndTime: '24시간 영업',
      };
    }
    if (operateTimeInfo.includes(',')) {
      operateTimeInfo.split(', ').forEach((item) => {
        const { startType, startTime, endType, endTime } = seperateTypeNTime({
          item,
        });

        const calcStartTime = isYesterday
          ? transformTime({ type: startType, time: startTime }) - 24
          : transformTime({ type: startType, time: startTime });
        const calcEndTime = isYesterday
          ? transformTime({ type: endType, time: endTime }) - 24
          : transformTime({ type: endType, time: endTime });

        if (isOperateFn({ startTime: calcStartTime, endTime: calcEndTime })) {
          return {
            flag: true,
            displayEndTime: `${endType} ${endTime}`,
          };
        }
      });
    } else {
      const { startType, startTime, endType, endTime } = seperateTypeNTime({
        item: operateTimeInfo,
      });

      const calcStartTime = isYesterday
        ? transformTime({ type: startType, time: startTime }) - 24
        : transformTime({ type: startType, time: startTime });
      const calcEndTime = isYesterday
        ? transformTime({ type: endType, time: endTime }) - 24
        : transformTime({ type: endType, time: endTime });

      if (isOperateFn({ startTime: calcStartTime, endTime: calcEndTime })) {
        return {
          flag: true,
          displayEndTime: `${endType} ${endTime}`,
        };
      }
    }
    return {
      flag: false,
      displayEndTime: '',
    };
  }

  useEffect(() => {
    if (data) {
      const todayOperateInfo = data[`${date.getDay() === 0 ? 6 : date.getDay() - 1}`][1];
      const yesterdayOperateInfo =
        data[`${date.getDay() <= 1 ? date.getDay() + 5 : date.getDay() - 2}`][1];

      const { flag: todayCalcResult, displayEndTime: todayCalcDisplayTime } = calculateEndTime({
        operateTimeInfo: todayOperateInfo,
      });

      if (todayCalcResult) {
        setIsOperate(todayCalcResult);
        setDisplayEndTime(todayCalcDisplayTime);
      } else {
        const { flag: yesterdayCalcResult, displayEndTime: yesterdayCalcDisplayTime } =
          calculateEndTime({
            operateTimeInfo: yesterdayOperateInfo,
            isYesterday: true,
          });
        if (yesterdayCalcResult) {
          setIsOperate(yesterdayCalcResult);
          setDisplayEndTime(yesterdayCalcDisplayTime);
        } else {
          setIsOperate(todayCalcResult);
          setDisplayEndTime(todayCalcDisplayTime);
        }
      }
    }
  }, [data]);

  return (
    <S.Container>
      <S.InfomationText>
        {isOperate ? (
          <>
            <span className="main">영업중</span>
            <span>∙</span>
          </>
        ) : (
          <span className="red">영업종료</span>
        )}
        <span>{displayEndTime}</span>
        {isOpen ? (
          <ChevronTopIcon
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        ) : (
          <ChevronBottomIcon
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        )}
      </S.InfomationText>
      {isOpen && (
        <S.OperateTimeList>
          {data &&
            data.map((item) => (
              <S.OperateTimeItem>
                <span>{item[0]}</span>
                <span>{item[1]}</span>
              </S.OperateTimeItem>
            ))}
        </S.OperateTimeList>
      )}
    </S.Container>
  );
}

export default PlaceOperateTime;
