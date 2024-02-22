import styled from "styled-components";

export const GroupList = styled.ol`
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 13px 20px;
`;

export const GroupItem = styled.li`
  cursor: pointer;
  div {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-color: ${({ theme }) => theme.gray05};
    border-radius: 10px;
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

export const CreateNewGroupItem = styled(GroupItem)<{ background?: string }>`
  div {
    background-color: ${({ theme }) => theme.blue05};
    background-image: url(${({ background }) => background});
    background-position: center;
    background-repeat: no-repeat;
  }
`;
