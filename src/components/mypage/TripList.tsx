import * as S from "../../styles/mypage/TripList.style";

import TripItem from "./TripItem";
import { myTripData } from "../../assets/data/mypageData";

function TripList() {
    return(<>
        <S.List>
            {myTripData.map((trip) => <TripItem {...trip} />)}
        </S.List>
    </>)
}

export default TripList;