import styled from "styled-components";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpen }) => (isOpen ? 40 : -10)};

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const GroupList = styled.ol`
  margin-top: 18px;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 13px 20px;
`;

export const GroupItem = styled.li<{ background?: string | undefined }>`
  position: relative;
  cursor: pointer;
  div {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.gray05};
    background-image: ${({ background }) =>
      background ? `url(${background})` : "none"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const CreateNewGroupItem = styled(GroupItem)`
  div {
    background-color: ${({ theme }) => theme.blue05};
    background-size: auto;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0;

  cursor: pointer;
  border-radius: 50%;
  border: 0;
  line-height: 0;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.gray04};
  }
`;
