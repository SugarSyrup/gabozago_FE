import styled from 'styled-components';

export const InfoTopContainer = styled.div`
  padding-top: 1px;
  padding-left: 4px;
  & > p:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    align-items: center;
  }
  & > p:nth-child(2) {
    padding-bottom: 2px;
  }
`;
