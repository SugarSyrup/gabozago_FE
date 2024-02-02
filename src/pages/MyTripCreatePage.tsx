import { useState } from "react";

import {
    locations,
    extraLocations,
    locationType,
} from "../assets/data/locations";
import PageTemplate from "../components/common/PageTemplate";
import Button from "../components/common/Button";
import useSearchInput from "../hooks/useSearchInput";

import * as S from "../styles/pages/MyTripCreatePage.style";
import { Heading } from "../styles/common/Heading.style";
import LocationTag from "../components/mytrip/LocationTag";
import BackButton from "../components/mytrip/BackButton";
import SearchedLocations from "../components/mytrip/SearchedLocations";

function MyTripCreatePage() {
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [searchedLocations, setSearchedLocations] = useState<locationType[]>(
        []
    );
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const [inputRef, SearchInput] = useSearchInput({
        placeholder: "어디로 떠나시나요?",
        onChange: onChange,
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

    function onChange() {
        if (inputRef.current) {
            if (inputRef.current?.value === "") {
                setIsSearching(false);
            } else {
                setIsSearching(true);
                setSearchedLocations(searchResult(inputRef.current?.value));
            }
        }
    }

    function searchResult(keyword: string) {
        return extraLocations.filter((location) =>
            location.name.includes(keyword)
        );
    }

    return (
        <PageTemplate nav={false} header={false}>
            <S.Header>
                <BackButton />
                <SearchInput />
            </S.Header>
            {isSearching ? (
                <SearchedLocations
                    searchedLocations={searchedLocations}
                    keyword={inputRef.current?.value}
                />
            ) : (
                <>
                    <S.LocationsHeader>
                        <Heading size="md">지역을 선택해주세요.</Heading>
                    </S.LocationsHeader>
                    <S.Locations>
                        {locations.map((location) => {
                            const isActive = selectedLocations.includes(
                                location.name
                            );
                            return (
                                <Button
                                    size="md"
                                    type="normal"
                                    active={isActive}
                                    onClick={() => {
                                        isActive
                                            ? deleteLocation(location.name)
                                            : selectLocation(location.name);
                                    }}
                                    key={location.name}
                                >
                                    {location.name}
                                </Button>
                            );
                        })}
                    </S.Locations>
                </>
            )}
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
