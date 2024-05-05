import { userTripData } from "../../../assets/data/userpageData";
import TripItem from "../TripItem";

import * as S from "./style";

function TripList() {
    return(<>
        <S.List>
            {userTripData.map((trip) => <TripItem {...trip} />)}
        </S.List>
    </>)
}

export default TripList;