import styled from 'styled-components';

export const CardList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  margin-top: 24px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100dvh;

  overflow-y: scroll;

  padding: 0 10px 10px;
  margin-top: 24px;
  margin-left: -20px;
  position: fixed;
  top: 0;
`;
