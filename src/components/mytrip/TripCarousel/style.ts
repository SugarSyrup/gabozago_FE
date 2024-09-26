import styled from 'styled-components';

export const ScheduleCardContainer = styled.div`
  margin-left: -20px;

  width: calc(100% + 40px);
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
