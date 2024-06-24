import styled from 'styled-components';

export const PlaceBox = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  cursor: pointer;
  text-align: left;
  border: 0;
  background-color: ${({ theme }) => theme.blue05};
  border-radius: 10px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }

  &:active {
    outline: 3px solid ${({ theme }) => theme.blue04};
    box-shadow: 0 5px 10px #849fff70;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  word-break: keep-all;
`;

export const MemoButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;

  cursor: pointer;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.blue04};
  border-radius: 8px;

  color: ${({ theme }) => theme.main};
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.blue04};
  }

  svg {
    width: 16px;
    height: 16px;
    path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;
export const InfoContainer = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 7px;
`;

export const InfoSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  color: ${({ theme }) => theme.gray02};
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 145.455% */
  letter-spacing: 0.5px;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.gray02};
    }
  }
`;
export const MemoParagraph = styled.p`
  width: 100%;
  padding: 8px 0 10px;
  font-size: 11px;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.main};
  word-break: keep-all;
  overflow-wrap: anywhere;
`;
