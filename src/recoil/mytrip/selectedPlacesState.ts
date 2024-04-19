import { atom } from "recoil";

interface Location {
    thumbnuail?: string,
    id:string,
    name:string,
}

export const selectedPlacesState = atom<Location[]>({
    key:"selectedLocations",
    default:[]
})