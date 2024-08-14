import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
`;

export const Container = styled.div`
  padding: 20px;
  width: calc(100% + 40px);
  margin-left: -20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};

  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.my-history {
    margin-top: 30px;
  }
`;

export const Heading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const CategoryButtonList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: 0;
  gap: 6px;
`;

export const CategoryButton = styled.button`
  padding: 18px 5px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  cursor: pointer;
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.gray01};
  border: 1px solid ${({ theme }) => theme.gray03};
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }

  &.active {
    font-weight: 500;
    color: ${({ theme }) => theme.main};
    border: 1px solid ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.blue05};

    &:hover {
      background-color: ${({ theme }) => theme.blue05};
    }

    svg path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;

export const QuestionList = styled.ul`
  position: relative;
  left: -20px;
  width: calc(100% + 40px);
  margin-top: 12px;

  li {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.gray04};

    a {
      width: 100%;
      padding: 20px;
      text-decoration: none;
      color: ${({ theme }) => theme.black};

      &:hover {
        background-color: ${({ theme }) => theme.gray06};
      }

      &::before {
        margin-right: 6px;
        content: 'Q.';
        color: ${({ theme }) => theme.gray01};
      }
    }
  }
`;
