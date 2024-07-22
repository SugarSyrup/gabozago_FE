import styled from 'styled-components';

export const DefaultButton = styled.button<{
  bgColor: string;
}>`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
