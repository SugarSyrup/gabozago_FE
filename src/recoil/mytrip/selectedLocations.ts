import { atom } from "recoil";

export const selectedLocationsState = atom<string[]>({
    key: "selectedLocationList",
    default: [],
});
