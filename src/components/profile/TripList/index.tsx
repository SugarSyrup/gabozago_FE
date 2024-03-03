import * as S from "./style";

import TripItem from "../TripItem";
import { userTripData } from "../../../assets/data/userpageData";

function TripList() {
    return(<>
        <S.List>
            {userTripData.map((trip) => <TripItem {...trip} />)}
        </S.List>
    </>)
}

export default TripList;