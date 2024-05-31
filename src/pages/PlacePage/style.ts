import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  grid-template-columns: 100%;
  margin: auto;

  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;
 @supports (-webkit-touch-callout: none) {
  height: -webkit-fill-available;
}

  background-color: ${({ theme }) => theme.white};
  z-index: 0;
`;

export const TopBarText = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;

  padding-bottom: 14px;
  padding-top: 14px;
`;

export const ContentContainer = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
`;

export const ImgSlider = styled.div`
  width: 100%;
  overflow: auto;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-type: x mandatory;

  img {
    width: 100%;
    scroll-snap-align: start;
    object-fit: contain;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

export const ImgRegistContainer = styled.div`
  width: 100%;
  height: 200px;

  background-color: #e4e4e4;
  color: #a6a6a6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    width: 56px;
    height: 56px;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const ContentList = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const InfomationList = styled.ol`
  width: 100%;
  margin-top: 8px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InfomationItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: flex-start;
  gap: 20px;

  svg {
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.gray};
    }
  }
`;

export const InfomationText = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const InfomationLink = styled(Link)`
  color: ${({ theme }) => theme.main};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration-line: underline;
`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.div`
  width: 100%;
  padding: 9px 27px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray05};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: #a6a6a6;
    }
  }
`;

export const AlertMessageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

export const AlertMessageName = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  word-break: keep-all;
  overflow-wrap: anywhere;
  max-width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
