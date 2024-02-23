import styled from "styled-components";

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
