import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TravelLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.font.secondary};
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.colors.font.secondary};
    }
  }
`;

export const CreateMyTrip = styled(Link)`
  width: 100%;
  padding: 15px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.white};
  border: 0.5px solid ${({ theme }) => theme.main};
  border-radius: 10px;

  text-decoration: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: #bdbdbd;
    }
  }
`;
