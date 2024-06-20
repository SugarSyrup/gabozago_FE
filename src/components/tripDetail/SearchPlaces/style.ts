import styled from 'styled-components';

export const SearchPlacesList = styled.div`
  width: 100%;
  padding-top: 80px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddPlace = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 28px;
`;

export const Explain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  color: ${({ theme }) => theme.gray01};
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.main};
  padding: 7px 23px;
  background-color: white;
  border-radius: 30px;
`;

export const SearchedNotFounded = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;

  svg {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }
`;

export const Title = styled.h4`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  margin-top: 14px;
  margin-bottom: 10px;
`;

export const Desc = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;

  margin-bottom: 20px;

  max-width: 135px;
  text-overflow: ellipsis;
  text-align: center;

  color: ${({ theme }) => theme.gray02};
`;

export const SelectedPlacesList = styled.ol`
  display: flex;
  gap: 10px;

  padding: 10px 28px;
  position: fixed;
  bottom: 0px;
`;
