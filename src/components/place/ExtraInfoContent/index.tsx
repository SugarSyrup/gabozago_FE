import Typography from '@_common/Typography';
import * as S from './style';
import AdditionalText from '../AdditionalText';

import TimeIcon from '@_icons/clock.svg?react';
import LinkIcon from '@_icons/web.svg?react';

import ParkIcon from '@_icons/park.svg?react';
import PetIcon from '@_icons/dog.svg?react';
import WheelChairIcon from '@_icons/wheelChair.svg?react';
import BabyCarrigeIcon from '@_icons/babyCarrige.svg?react';
import PetDenyIcon from '@_icons/pet_deny.svg?react';
import ParkDenyIcon from '@_icons/park_deny.svg?react';
import WheelChairDenyIcon from '@_icons/wheelChair_deny.svg?react';
import BabyCarrigeDenyIcon from '@_icons/babyCarrige_deny.svg?react';

interface Props {
  data: {
    openingHours: string;
    website: string;
    additionalInfomation: string;
    amenitiesAndService: {
      parking: boolean;
      pet: boolean;
      barrierFree: boolean;
      stroller: boolean;
    };
  };
}

function ExtraInfoContent({ data }: Props) {
  return (
    <S.Container>
      {data.openingHours && (
        <S.InfomationItem>
          <TimeIcon />
          {/* <PlaceOperateTime opening_hours={data.openingHours} /> */}
          <AdditionalText data={data.openingHours}>
            <S.InfomationText>운영시간</S.InfomationText>
          </AdditionalText>
        </S.InfomationItem>
      )}

      {data.website && (
        <S.InfomationItem>
          <LinkIcon />
          <S.InfomationLink to={data.website}>{data.website}</S.InfomationLink>
        </S.InfomationItem>
      )}

      {data.additionalInfomation && (
        <S.InfomationItem>
          <TimeIcon />
          {/* <PlaceOperateTime opening_hours={data.opening_hours} /> */}
          <AdditionalText data={data.additionalInfomation}>
            <S.InfomationText>부가 정보</S.InfomationText>
          </AdditionalText>
        </S.InfomationItem>
      )}

      {data.amenitiesAndService.parking !== null ||
        data.amenitiesAndService.barrierFree !== null ||
        data.amenitiesAndService.stroller !== null ||
        (data.amenitiesAndService.pet !== null && (
          <Typography.Title size="lg" color="black">
            편의시설 및 서비스
          </Typography.Title>
        ))}

      <S.AmenitiesAndServiceList>
        {data.amenitiesAndService.parking !== null && (
          <S.AmenitiesAndServiceItem>
            {data.amenitiesAndService.parking ? <ParkIcon /> : <ParkDenyIcon />}
            {data.amenitiesAndService.parking ? (
              <Typography.Body size="lg" color="#424242">
                주차 가능
              </Typography.Body>
            ) : (
              <Typography.Body size="lg" color="#424242">
                주차 불가능
              </Typography.Body>
            )}
          </S.AmenitiesAndServiceItem>
        )}

        {data.amenitiesAndService.barrierFree !== null && (
          <S.AmenitiesAndServiceItem>
            {data.amenitiesAndService.barrierFree ? <BabyCarrigeIcon /> : <BabyCarrigeDenyIcon />}
            {data.amenitiesAndService.barrierFree ? (
              <Typography.Body size="lg" color="#424242">
                배리어프리 가능
              </Typography.Body>
            ) : (
              <Typography.Body size="lg" color="#424242">
                배리어프리 불가능
              </Typography.Body>
            )}
          </S.AmenitiesAndServiceItem>
        )}

        {data.amenitiesAndService.stroller !== null && (
          <S.AmenitiesAndServiceItem>
            {data.amenitiesAndService.stroller ? <WheelChairIcon /> : <WheelChairDenyIcon />}
            {data.amenitiesAndService.stroller ? (
              <Typography.Body size="lg" color="#424242">
                유아차 대여 가능
              </Typography.Body>
            ) : (
              <Typography.Body size="lg" color="#424242">
                유아차 대여 불가능
              </Typography.Body>
            )}
          </S.AmenitiesAndServiceItem>
        )}

        {data.amenitiesAndService.pet !== null && (
          <S.AmenitiesAndServiceItem>
            {data.amenitiesAndService.pet ? <PetIcon /> : <PetDenyIcon />}
            {data.amenitiesAndService.pet ? (
              <Typography.Body size="lg" color="#424242">
                반려동물 출입 가능
              </Typography.Body>
            ) : (
              <Typography.Body size="lg" color="#424242">
                반려동물 출입 불가능
              </Typography.Body>
            )}
          </S.AmenitiesAndServiceItem>
        )}
      </S.AmenitiesAndServiceList>
    </S.Container>
  );
}

export default ExtraInfoContent;
