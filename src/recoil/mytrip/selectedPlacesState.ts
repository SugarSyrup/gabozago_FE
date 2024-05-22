import { atom } from "recoil";

interface Location {
    thumbnail?: string,
    id:number,
    name:string,
}

export const selectedPlacesState = atom<Location[]>({
    key:"selectedLocations",
    default:[]
})