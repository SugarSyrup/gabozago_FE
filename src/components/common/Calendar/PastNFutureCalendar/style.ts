import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  width: 100%;
  height: calc(100dvh - 190px);
  overflow: auto;
  /* overflow-y: hidden; */

  /* scroll-snap-type: y mandatory; */

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

export const InfiniteScrollWrapper = styled.div`
  width: 100%;
`;
