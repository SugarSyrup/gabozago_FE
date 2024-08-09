import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  display: grid;
  grid-template-columns: 32px 1fr 32px;
  grid-template-areas: 'left center right';
  background-color: white;
`;

export const LeftBackButtonWrapper = styled.div`
  grid-area: left;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${({ theme }) => theme.colors.gray.primary};
    }
  }
`;

export const LeftIconContainer = styled.div`
  grid-area: left;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderText = styled.div`
  grid-area: center;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
