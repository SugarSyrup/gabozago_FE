import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { locations } from "../assets/data/locations";
import LeftChevronIcon from "../assets/icons/leftChevron.svg?react";
import PageTemplate from "../components/common/PageTemplate";
import Button from "../components/common/Button";
import useSearchInput from "../hooks/useSearchInput";

import * as S from "../styles/pages/MyTripCreatePage.style";
import { Heading } from "../styles/common/Heading.style";
import LocationTag from "../components/mytrip/LocationTag";

function MyTripCreatePage() {
    const navigate = useNavigate();
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

    const [, SearchInput] = useSearchInput({
        placeholder: "어디로 떠나시나요?",
        onSubmit: () => {},
    });

    function selectLocation(location: string) {
        setSelectedLocations((prev) =>
            [location, ...prev].filter((findLocation, index) => {
                return [location, ...prev].indexOf(findLocation) === index;
            })
        );
    }

    function deleteLocation(location: string) {
        setSelectedLocations((prev) =>
            prev.filter((item) => location !== item)
        );
    }

    return (
        <PageTemplate nav={false} header={false}>
            <S.Header>
                <LeftChevronIcon
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <SearchInput />
            </S.Header>
            <S.LocationsHeader>
                <Heading size="md">지역을 선택해주세요.</Heading>
            </S.LocationsHeader>
            <S.Locations>
                {locations.map((location) => {
                    const isActive =
                        selectedLocations.find(
                            (selectedLocation) => selectedLocation == location
                        ) == location;
                    return (
                        <Button
                            size="md"
                            type="normal"
                            active={isActive}
                            onClick={() => {
                                isActive
                                    ? deleteLocation(location)
                                    : selectLocation(location);
                            }}
                            key={location}
                        >
                            {location}
                        </Button>
                    );
                })}
            </S.Locations>
            <S.Footer>
                <S.LocationTags>
                    {selectedLocations.map((selectedLocation) => (
                        <LocationTag
                            name={selectedLocation}
                            key={selectedLocation}
                            onClick={() => {
                                deleteLocation(selectedLocation);
                            }}
                        />
                    ))}
                </S.LocationTags>
                <Button
                    size="lg"
                    type="normal"
                    disabled={!(selectedLocations.length > 0)}
                    active={selectedLocations.length > 0}
                >
                    지역을 선택해주세요.
                </Button>
            </S.Footer>
        </PageTemplate>
    );
}

export default MyTripCreatePage;
