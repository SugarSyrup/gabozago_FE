import * as S from "./style";
import Heading from "../../common/Heading";
import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom.svg?react";
import ChevronTopIcon from "../../../assets/icons/chevron_top.svg?react";
import { useState } from "react";

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
}

function Routes({data}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <S.Route>
            {
                isOpen ?
                <>
                    <ChevronTopIcon  onClick={() => {setIsOpen(false)}}/>
                    <S.RouteList>
                        {
                            data.map((dayData) => {
                                const slicePlaces: DayType["places"][] = [];
                                for( let i = 0; i<dayData.places.length / 5; i++){
                                    slicePlaces.push(dayData.places.slice(i*5,(i+1)*5));
                                }
                                console.log(slicePlaces);

                                return (
                                    <>
                                        <S.RouteItemContent line={1}>
                                            <DoubleCircleIcon />
                                            <span>Day {dayData.day}</span>
                                            <S.RouteItemLink to="/post">코스 저장하기</S.RouteItemLink>
                                        </S.RouteItemContent>
                                        {
                                            slicePlaces.map((places, line) => 
                                                <S.RouteItemContent line={line+1}>
                                                    <S.RouteVerticalLine />
                                                    <S.RouteCourseLine length={places.length}>
                                                        {
                                                            places.map((place, idx) => 
                                                                <S.CourseContainer left={idx*(100/(places.length-1))}>
                                                                    <S.CourseImg src="123"/>
                                                                    <S.CourseName>{place.name}</S.CourseName>
                                                                </S.CourseContainer>
                                                            )
                                                        }
                                                    </S.RouteCourseLine>
                                                </S.RouteItemContent>
                                            )
                                        }
                                        <S.RouteItemContent line={1}></S.RouteItemContent>
                                    </>
                                )
                            })
                        }
                    </S.RouteList>
                </>
                :
                <>
                    <Heading size="xs" >여행루트</Heading>
                    <S.RouteLine>
                        {
                            data.map((day, idx) => 
                                <S.RouteItem left={idx*(100/(data.length-1))}>
                                    <DoubleCircleIcon />
                                    <span>TEXT</span>
                                </S.RouteItem>
                            )
                        }
                    </S.RouteLine>
                    <ChevronBottomIcon onClick={() => {setIsOpen(true)}}/>
                </>
            }
            
        </S.Route>
    )
}

export default Routes;