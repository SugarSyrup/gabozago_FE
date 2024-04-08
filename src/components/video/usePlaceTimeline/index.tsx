import * as S from "./style";

import BusIcon from "../../../assets/icons/bus.svg?react";
import CalendarAddIcon from "../../../assets/icons/calendar_add_border.svg?react";
import { useCallback, useEffect, useRef, useState } from "react";

const data = [
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: 15,
    },
    {
        name: "장소명",
        theme: "테마",
        time: -1,
    },
]

function usePlaceTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        timelineRef.current?.scrollTo({
            left:210 * index + 13 - (timelineRef.current.offsetWidth / 2),
            behavior:"smooth"
        })
        console.log(index);
    }, [index]);

    function getCurrentIndex() {
        return index;
    }

    function movePrev() {
        console.log(index);
        setIndex(prev => (prev - 1) >= 0 ? prev - 1 : prev);
        // index 상태값이 왜 0으로 고정이지?
        if(index > 0) {
            setIndex(prev => prev - 1);
        }
    }

    function moveNext() {
        setIndex(prev => prev + 1);
    }

    function moveIndex(idx: number) {
        setIndex(idx);
    }

    const PlaceTimeline = useCallback(() => {
        return(
            <S.VideoTimeline ref={timelineRef}>
                {data.map((ele, idx) => <>
                    <S.TimeLineItem onClick={() => {moveIndex(idx)}}>
                        <S.TimeLineIndex>{idx+1}</S.TimeLineIndex>
                        <S.TimeLineInfo>
                            <span>{ele.name}</span>
                            <span>{ele.theme}</span>
                        </S.TimeLineInfo>
                        <CalendarAddIcon />
                    </S.TimeLineItem>
                    {
                        ele.time != -1 &&
                        <S.TimeLineLinker>
                            <div>
                                <BusIcon />
                                <span>{ele.time}분</span>
                            </div>
                        </S.TimeLineLinker>
                    }
                </>)}
            </S.VideoTimeline>
        )
    }, []
    )

    return { PlaceTimeline, moveIndex, movePrev, moveNext, getCurrentIndex};
};

export default usePlaceTimeline;