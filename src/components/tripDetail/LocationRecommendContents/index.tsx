import { useEffect, useState } from 'react'

import { get } from '../../../utils/api'

import Typography from '../../common/Typography'
import RecommendationReviewItem from '../RecommendationReviewItem'

import * as S from './style'

interface Props {
  locations: string[]
}

interface TRecommendData {
  article: {
    id: number
    title: string
    location: string[]
    thumbnailURL: string
    claps: number
    comment: number
    bookmark: number
  }[]
  short_form: {
    id: number
    title: string
    location: string[]
    videoId: string
    claps: number
    comment: number
    bookmark: number
  }[]
}

function LocationRecommendContents({ locations }: Props) {
  const [data, setData] = useState<TRecommendData[]>()

  useEffect(() => {
    get<TRecommendData[]>(
      `my-travel/location/content?name=${locations.toLocaleString()}`
    ).then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <>
      {data && (data[0].article || data[1].short_form) && (
        <Typography.Title size="lg">
          추가한 여행지를 포함한 콘텐츠 제공
        </Typography.Title>
      )}
      <S.RecommendatoinReviewList>
        {data && data[0].article && (
          <RecommendationReviewItem
            type="article"
            id={data[0].article[0].id}
            name={data[0].article[0].title}
            location={data[0].article[0].location}
            thumbnailURL={data[0].article[0].thumbnailURL}
            hearts={data[0].article[0].claps}
            comments={data[0].article[0].comment}
            scraps={data[0].article[0].bookmark}
          />
        )}
        {data && data[1].short_form && (
          <RecommendationReviewItem
            type="short-form"
            id={data[1].short_form[0].id}
            videoId={data[1].short_form[0].videoId}
            name={data[1].short_form[0].title}
            location={data[1].short_form[0].location}
            hearts={data[1].short_form[0].claps}
            comments={data[1].short_form[0].comment}
            scraps={data[1].short_form[0].bookmark}
          />
        )}
      </S.RecommendatoinReviewList>
    </>
  )
}

export default LocationRecommendContents
