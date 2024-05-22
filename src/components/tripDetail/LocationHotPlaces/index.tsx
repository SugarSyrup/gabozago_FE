import { useEffect, useState } from "react";

import { get } from "../../../utils/api";
import Typography from "../../common/Typography";

import RecommendationListItem from "../RecommendationListItem";
import * as S from "./style";

interface Props {
    locations: string[],
}

interface TPlace {
    id: number,
    name: string,
    theme: string,
    location: string[],
}

function LocationHotPlaces({locations}: Props) {
    const [recommendPlaces, setRecommendPlaces] = useState<TPlace[]>([]);

    useEffect(() => {
        //[SugarSyrup] @TODO: 500 Error
        get<TPlace[]>('/my-travel/location/hot')
            .then((response) => {
                setRecommendPlaces(response.data);
            })
    }, []);

    return (
        <>
            {recommendPlaces.length !== 0 && <Typography.Title size="lg">{locations} HOT 여행지</Typography.Title>}
            <S.RecommendationList>
                {recommendPlaces.map(({ name, theme, id, location }) => (
                    <RecommendationListItem
                        name={name}
                        theme={theme}
                        location={location}
                        id={id}
                    />
                ))}
            </S.RecommendationList>
        </>
    );
}   

export default LocationHotPlaces;