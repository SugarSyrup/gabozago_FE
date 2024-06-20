import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Route = styled.div`
  width: 100%;
  padding: 10px 52px;

  border-radius: 10px;
  background: ${({ theme }) => theme.gray06};

  margin-top: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const RouteLine = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.blue02};
  margin-bottom: 20px;

  position: relative;
`

export const RouteItem = styled.div<{ left: number }>`
  position: absolute;
  /* TODO : 이거 -4땡기는거 span width의 절반인데 흠냐뤼 */
  left: ${({ left }) => `${left - 4}%`};
  top: -6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  span {
    font-size: 10px;
    font-weight: 400;
    line-height: 24.043px;
  }
`

export const RouteList = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`

export const RouteItemContent = styled.li<{ line: number }>`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  font-size: 15px;
  font-weight: 600;
  line-height: 21.588px;

  margin-top: ${({ line }) => line === 2 && '-15px'};
`

export const RouteItemLink = styled.span`
  color: ${({ theme }) => theme.gray01};
  font-size: 12px;
  font-weight: 500;
  text-decoration-line: underline;

  margin-left: -10px;
`

export const RouteVerticalLine = styled.div`
  width: 10px;
  height: 70px;
  border-right: 2px solid ${({ theme }) => theme.main};
`

export const RouteCourseLine = styled.div<{ length: number }>`
  width: ${({ length }) => 20 * (length - 1)}%;
  border-top: 2px solid ${({ theme }) => theme.main};
  padding-top: 35px;

  position: relative;
`

export const CourseContainer = styled.div<{ left: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2px;

  position: absolute;
  top: -20px;
  left: ${({ left }) => `${left}%`};
`

export const CourseImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  background-color: ${({ theme }) => theme.gray03};
`

export const CourseName = styled.span`
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 21.832px;
`
