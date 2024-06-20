import { useState } from 'react';
import * as S from './style';
import Heading from '../../common/Heading';
import DoubleCircleIcon from '../../../assets/icons/double_circle.svg?react';
import ChevronBottomIcon from '../../../assets/icons/chevron_bottom.svg?react';
import ChevronTopIcon from '../../../assets/icons/chevron_top.svg?react';

interface DayType {
  day:number,
  places:{
    id:string,
    name:string,
    thumbnailURL:string,
  }[]
}

interface Props {
  data: DayType[];
  alertOpenFn: (tripName: string, day: number) => void;
}

function Routes({ data, alertOpenFn }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Route>
      {
                isOpen
                  ? (
                    <>
  <ChevronTopIcon onClick={() => { setIsOpen(false); }} />
  <S.RouteList>
                    {
                            data.map((dayData) => {
                              const slicePlaces: DayType['places'][] = [];
                              for (let i = 0; i < dayData.places.length / 5; i++) {
                                slicePlaces.push(dayData.places.slice(i * 5, (i + 1) * 5));
                              }

                              return (
                                <>
                                    <S.RouteItemContent line={1}>
                                        <DoubleCircleIcon />
                                        <span>
                                            Day{dayData.day}
                                          </span>
                                        <S.RouteItemLink onClick={() => {
                                            { /* TODO: req -> res 저장된 여행 경로 가져와서, alert */ }
                                            alertOpenFn('부산 여행', dayData.day);
                                          }}
                                          >코스 저장하기
                                          </S.RouteItemLink>
                                      </S.RouteItemContent>
                                    {
                                            slicePlaces.map((places, line) => (
                                              <S.RouteItemContent line={line + 1}>
                                                  <S.RouteVerticalLine />
                                                  <S.RouteCourseLine length={places.length}>
                                                      {
                                                            places.map((place, idx) =>
                                                                TODO: 아이텀 선택시 장소 상세 정보 페이지 이동 액션 (
                                                                <S.CourseContainer left={idx*(100/(places.length-1))}>
                                                                    <S.CourseImg src="123"/>
                                                                    <S.CourseName>{place.name}</S.CourseName>
                                                                </S.CourseContainer>
                                                              )
                                                            )
                                                        }
                                                    </S.RouteCourseLine>
                                                </S.RouteItemContent>
                                            ))
                                        }
                                    <S.RouteItemContent line={1} />
                                  </>
                              );
                            })
                        }
                  </S.RouteList>
</>
                  )
                  : (
<>
                  <Heading size="xs">여행루트</Heading>
                  <S.RouteLine>
                    {
                            data.map((day, idx) => (
                              <S.RouteItem left={idx * (100 / (data.length - 1))}>
                                  <DoubleCircleIcon />
                                  <span>TEXT</span>
                                </S.RouteItem>
                            ))
                        }
                  </S.RouteLine>
                  <ChevronBottomIcon onClick={() => { setIsOpen(true); }} />
                                 </>
)
            }

    </S.Route>
  );
}

export default Routes;
