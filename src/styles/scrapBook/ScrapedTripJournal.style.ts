import styled from "styled-components";

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

export const SaveButton = styled.button`
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

export const NewFolderNameInput = styled.input`
  width: 100%;
  padding: 5px 3px;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.gray04};

  font-size: 14px;
`;

export const GroupList = styled.ol`
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 13px 20px;
`;

export const GroupItem = styled.li<{ background?: string | undefined }>`
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
