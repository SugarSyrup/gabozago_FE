import styled from 'styled-components'

export const Summary = styled.div`
  padding: 19px 26px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.blue05};

  display: grid;
  grid-template-areas:
    'places places'
    'people dates'
    'payments seasons'
    'themes themes';

  row-gap: 14px;

  svg {
    width: 20px;
    height: 20px;
    path {
      fill: #849fff;
    }
  }
`

export const Places = styled.div`
  grid-area: places;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const People = styled.div`
  grid-area: people;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const Dates = styled.div`
  grid-area: dates;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const Payments = styled.div`
  grid-area: payments;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const Seasons = styled.div`
  grid-area: seasons;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const Themes = styled.div`
  grid-area: themes;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const SummaryName = styled.span`
  color: ${({ theme }) => theme.gray01};
  font-size: 12px;
  font-weight: 400;
`

export const SummaryValueWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 4px;

  margin-left: 4px;
`

export const SummaryValue = styled.span`
  font-size: 12px;
  font-weight: 500;
`

export const Dot = styled.span`
  color: ${({ theme }) => theme.blue03};
  font-size: 8px;
`
