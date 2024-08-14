import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-left: -20px;
  width: 100%;
  max-width: 500px;
`;

export const InfoContainer = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e4e4e4;

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: start;
  border-bottom: 0.5px solid #e4e4e4;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
`;

export const StatusSpan = styled.span<{ type: 'active' | 'inactive' }>`
  width: fit-content;
  flex-shrink: 0;
  margin-left: 8px;
  padding: 5px 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;

  ${({ type }) =>
    type === 'active'
      ? css`
          color: ${({ theme }) => theme.main};
          background: ${({ theme }) => theme.blue05};
        `
      : css`
          color: ${({ theme }) => theme.gray02};
          background: ${({ theme }) => theme.gray05};
        `}
`;

export const DateSpan = styled.span`
  color: ${({ theme }) => theme.gray02};

  /* Label/Label Medium */
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const Contents = styled.div`
  padding: 20px;
`;

export const ImgContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const ImgList = styled.ol`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  gap: 10px;

  overflow-x: scroll;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    border-radius: 10px;
    width: 80px;
    height: 80px;
  }
`;

export const AnswerInfoContainer = styled(InfoContainer)`
  margin-top: 20px;
  border-top: 1px solid #e4e4e4;
`;
