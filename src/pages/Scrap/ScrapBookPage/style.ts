import styled from 'styled-components';

export const Header = styled.header`
  background-color: white;
`;

export const Heading = styled.h1`
  width: 100%;
  padding: 10px 20px;

  color: #121212;
  text-align: center;

  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;

export const FilterContainer = styled.div`
  margin-top: 10px;
  padding: 0 20px;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NewPlaceButton = styled.button`
  padding: 0 10px;
  margin-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.blue.primary};
  cursor: pointer;

  svg {
    flex-shrink: 0;
    width: 12px;
    height: 12px;

    path {
      stroke: #5276fa;
    }
  }

  h3 {
    text-wrap: nowrap;
  }
`;
