import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow-y: auto;

  div.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const QuestionsContainer = styled.div``;

export const Heading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;
