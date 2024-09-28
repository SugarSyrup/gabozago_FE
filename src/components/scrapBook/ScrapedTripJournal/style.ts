import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpen }) => (isOpen ? 540 : -10)};

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
    background-image: ${({ background }) => (background ? `url(${background})` : 'none')};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  p {
    position: relative;
    margin-top: 10px;
    padding-right: 25px;
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
  top: 0;
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

export const PopupHeader = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PopupTitle = styled.p`
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
`;

export const PopupSaveButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.main};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
`;

export const PopupInput = styled.input`
  width: 100%;
  padding: 5px 3px;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.gray04};

  font-size: 16px;
`;
