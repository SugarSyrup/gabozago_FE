import styled, { css } from 'styled-components';

export const CalendarHeader = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const Calendar = styled.div`
  width: 100%;
  margin-top: 14px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-row-gap: 4px;
`;

// 요일
export const Day = styled.div`
  width: 32px;
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(60, 60, 67, 0.3);
`;
interface DateProps {
  isDuring: boolean;
  isToday: boolean;
  isPastDay?: boolean;
}

// 날짜
export const Date = styled.div<DateProps>`
  width: 100%;
  height: 44px;
  padding-top: 4px;
  padding-bottom: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 25px;

  background-clip: content-box;

  position: relative;
  z-index: 1;

  ${({ isDuring }) =>
    isDuring &&
    css`
      &::before {
        content: '';
        width: 100%;
        position: absolute;
        height: 30px;
        background-color: #e0e6ff;
        z-index: -1;
      }
    `}

  color: ${({ isToday, theme }) => isToday && theme.colors.blue.primary};
  color: ${({ isPastDay, theme }) => isPastDay && theme.colors.gray.secondary};
`;

export const DateHightlight = styled.div<{
  isStartDate: boolean;
  isThisDate: boolean;
}>`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;

  background-color: #5276fa;
  color: white;

  ${({ isStartDate, isThisDate }) => {
    if (isThisDate) {
      return css`
        &::before {
          content: '';
          width: 50%;
          height: 100%;

          background-color: white;

          position: absolute;
          left: 0;
          z-index: -1;
        }
        &::after {
          content: '';
          width: 50%;
          height: 100%;

          background-color: white;

          position: absolute;
          right: 0;
          z-index: -1;
        }
      `;
    }

    if (isStartDate) {
      return css`
        &::before {
          content: '';
          width: 50%;
          height: 100%;

          background-color: white;

          position: absolute;
          left: 0;
          z-index: -1;
        }
      `;
    }

    return css`
      &::after {
        content: '';
        width: 50%;
        height: 100%;

        background-color: white;

        position: absolute;
        right: 0;
        z-index: -1;
      }
    `;
  }}
`;

export const Empty = styled.div`
  width: 44px;
  height: 44px;
`;

export const Today = styled.div`
  position: absolute;
  bottom: -8px;

  color: ${({ theme }) => theme.colors.blue.primary};
`;
