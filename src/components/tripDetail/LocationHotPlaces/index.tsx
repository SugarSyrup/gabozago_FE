import { useEffect, useState } from 'react'

import { get } from '../../../utils/api'
import Typography from '../../common/Typography'

import RecommendationListItem from '../RecommendationListItem'
import * as S from './style'

interface Props {
  popupOpen: () => void
  setNewLocation: React.Dispatch<React.SetStateAction<string>>
  locations: string[]
}

interface TPlace {
  id: number
  name: string
  theme: string
  location: string
}

function LocationHotPlaces({ locations, setNewLocation, popupOpen }: Props) {
  const [recommendPlaces, setRecommendPlaces] = useState<TPlace[]>([])

  useEffect(() => {
    get<TPlace[]>(
      `/my-travel/location/hot?location=${locations.toString()}`
    ).then(response => {
      setRecommendPlaces(response.data)
    })
  }, [])

  return (
    <>
      {recommendPlaces.length !== 0 && (
        <Typography.Title size="lg">
          {locations.toLocaleString()} HOT 여행지
        </Typography.Title>
      )}
      {recommendPlaces.length !== 0 && (
        <S.RecommendationList>
          {recommendPlaces.map(({ name, theme, id, location }) => (
            <RecommendationListItem
              name={name}
              theme={theme}
              location={location}
              id={id}
              popupOpen={popupOpen}
              setNewLocation={setNewLocation}
              locations={locations}
            />
          ))}
        </S.RecommendationList>
      )}
    </>
  )
}

export default LocationHotPlaces
