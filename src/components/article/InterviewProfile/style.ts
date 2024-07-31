import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`;

export const Infomation = styled.div`
  width: 100%;
  padding: 15px 20px;

  background-color: ${({ theme }) => theme.blue05};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: ${({ theme }) => theme.main};
`;

export const Name = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5px;

  color: ${({ theme }) => theme.main};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

export const Division = styled.span`
  color: ${({ theme }) => theme.main};

  font-size: 12px;

  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-left: 4px;
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.colors.font.secondary};

  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
`;
