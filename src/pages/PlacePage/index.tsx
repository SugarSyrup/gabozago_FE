import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import LocationIcon from '../../assets/icons/location.svg?react'
import PhoneIcon from '../../assets/icons/phone.svg?react'
import TimeIcon from '../../assets/icons/clock.svg?react'
import LinkIcon from '../../assets/icons/web.svg?react'
import CalendarAddIcon from '../../assets/icons/calendar_add_border.svg?react'
import ScrapIcon from '../../assets/icons/bookmark.svg?react'
import PlusIcon from '../../assets/icons/plus_circle_blue.svg?react'

import BackButton from '../../components/common/BackButton'
import PageHeader from '../../components/common/PageHeader'
import PageTemplate from '../../components/common/PageTemplate'
import Typography from '../../components/common/Typography'
import PlaceOperateTime from '../../components/journal/PlaceOperateTime'
import PlaceGoogleMap from '../../components/journal/GoogleMap'
import { get, post } from '../../utils/api'

import * as S from './style'
import useAlert from '../../hooks/useAlert'

type TData = {
  region: string
  name: string
  theme: string
  address: string
  number: string
  opening_hours: string
  website: string
  image: string[]
  latitude: string
  longitude: string
}

function PlacePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState<TData>()
  const [imageURL, setImageURL] = useState<string>('')

  const [alertMessage, setAlertMessage] = useState<React.ReactNode>()
  const { Alert, alertOpen } = useAlert({
    Content: alertMessage,
  })

  useEffect(() => {
    get<TData>(`/place/${id}`).then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <PageTemplate
      header={
        <PageHeader LeftItem={<BackButton />}>
          <S.TopBarText>{data && data.name}</S.TopBarText>
        </PageHeader>
      }
      nav={false}
    >
      <Alert />
      {data !== undefined && (
        <S.ContentContainer>
          {data.image.length === 0 && imageURL === '' ? (
            <S.ImgRegistContainer>
              <label htmlFor="placeImgRegist">
                <PlusIcon />
              </label>
              <input
                id="placeImgRegist"
                type="file"
                accept="image/*"
                onInput={e => {
                  if (e.currentTarget.files) {
                    const file = e.currentTarget.files[0]
                    const reader = new FileReader()

                    reader.readAsDataURL(file)
                    reader.onloadend = () => {
                      setImageURL(reader.result as string)
                    }

                    const reqData = new FormData()
                    reqData.append('placeId', id as string)
                    reqData.append('image', file)

                    post('/place/image', reqData, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    })
                  }
                }}
              />
              <Typography.Title size="md" color="inherit">
                이 장소의 첫 번째 사진을 등록해주세요!
              </Typography.Title>
            </S.ImgRegistContainer>
          ) : (
            <S.ImgSlider>
              {data.image.map(img => (
                <img src={img} />
              ))}
            </S.ImgSlider>
          )}
          {imageURL && <S.TmpImg src={imageURL} />}
          <S.ContentList>
            <S.InfomationList>
              <S.InfomationItem>
                <LocationIcon />
                <S.InfomationText>{data.address}</S.InfomationText>
              </S.InfomationItem>
              <S.InfomationItem>
                <PhoneIcon />
                <S.InfomationText>{data.number}</S.InfomationText>
              </S.InfomationItem>
              {data.opening_hours && (
                <S.InfomationItem>
                  <TimeIcon />
                  <PlaceOperateTime opening_hours={data.opening_hours} />
                </S.InfomationItem>
              )}
              <S.InfomationItem>
                <LinkIcon />
                <S.InfomationLink to={data.website}>
                  인스타그램
                </S.InfomationLink>
              </S.InfomationItem>
            </S.InfomationList>
            <PlaceGoogleMap
              height="270px"
              center={{
                lat: Number(data.latitude),
                lng: Number(data.longitude),
              }}
              markers={[
                {
                  lat: Number(data.latitude),
                  lng: Number(data.longitude),
                },
              ]}
            />
            <S.Buttons>
              <S.Button
                onClick={() => {
                  navigate(`/mytrip/place/${id}`)
                }}
              >
                <CalendarAddIcon />
                <Typography.Label size="lg">
                  내 일정에 추가하기
                </Typography.Label>
              </S.Button>
              <S.Button
                onClick={() => {
                  post<{ message: string }>('/folder/scrap/place', {
                    placeId: id,
                  }).then(response => {
                    if (response.data.message === 'Create Success') {
                      setAlertMessage(
                        <S.AlertMessageContainer>
                          <S.AlertMessageName>{data.name}</S.AlertMessageName>
                          <Typography.Body
                            size="lg"
                            color="white"
                            maxWidth={140}
                          >
                            (이)가 스크랩 되었습니다.
                          </Typography.Body>
                        </S.AlertMessageContainer>
                      )
                    } else {
                      setAlertMessage(
                        <S.AlertMessageContainer>
                          <S.AlertMessageName>{data.name}</S.AlertMessageName>
                          <Typography.Body
                            size="lg"
                            color="white"
                            maxWidth={140}
                          >
                            (이)가 스크랩 목록에서 삭제되었습니다.
                          </Typography.Body>
                        </S.AlertMessageContainer>
                      )
                    }

                    alertOpen()
                  })
                }}
              >
                <ScrapIcon />
                <Typography.Label size="lg">
                  장소 스크랩에 저장
                </Typography.Label>
              </S.Button>
            </S.Buttons>
          </S.ContentList>
        </S.ContentContainer>
      )}
    </PageTemplate>
  )
}

export default PlacePage
