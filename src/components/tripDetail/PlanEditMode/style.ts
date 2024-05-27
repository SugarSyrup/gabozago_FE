import styled from "styled-components";

export const EditComplateButton = styled.button`
  position: absolute;
  right: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.main};

  &:hover {
    background-color: ${({ theme }) => theme.blue05};
  }
  &:active {
    background-color: ${({ theme }) => theme.blue04};
  }
`;
