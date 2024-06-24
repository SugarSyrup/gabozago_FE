import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px 10px;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background-color: #f9faff;
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.blue04};

  svg {
    width: 16px;
    height: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  img {
    border-radius: 100%;
  }
`;

export const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Desc = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const DescItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SVGMainColorWrapper = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;

export const SVGGrayColorWrapper = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.gray02};
    }
  }
`;

export const LinkIcon = styled.div`
  position: absolute;
  right: 10px;

  svg {
    width: 24px;
    height: 24px;
    path {
      fill: #a6a6a6;
    }
  }
`;
