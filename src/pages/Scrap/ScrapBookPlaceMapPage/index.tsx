import { useState } from 'react';
import { AdvancedMarker, InfoWindow, Map } from '@vis.gl/react-google-maps';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import MenuIcon from '@_icons/menu.svg?react';

import * as S from './style';

function ScrapBookPlaceMapPage() {
  const [data, setData] = useState<[]>();

  return (
    <PageTemplate
      header={<HeaderWithBack> </HeaderWithBack>}
      nav={
        <Map
          style={{
            width: '100%',
            height: '100dvh',
          }}
          defaultCenter={{ lat: 35.1855, lng: 129.0741 }}
          defaultZoom={17}
          gestureHandling="greedy"
          disableDefaultUI
          mapId={import.meta.env.VITE_GOOGLEMAP_MAP_ID}
          onClick={() => {
            setMapFocused(true);
            // console.log('onClick');
          }}
          onZoomChanged={() => {
            // console.log('onResize');
          }}
          onDrag={() => {
            // console.log('onDrag');
          }}
        >
          <AdvancedMarker position={{ lat: 35.1855, lng: 129.0741 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <circle
                cx="17.5"
                cy="17.5"
                r="16.25"
                fill="#5276FA"
                stroke="white"
                strokeWidth="2.5"
              />
              <path
                d="M16.8652 13.096C16.8481 12.3183 16.217 11.6929 15.4393 11.6929C14.6615 11.6929 14.0304 12.3183 14.0133 13.096L14.0129 13.1048C14.0129 13.1126 14.0118 13.1201 14.0118 13.1277C14.0118 13.1354 14.0127 13.1431 14.0129 13.1509V13.2444C13.361 12.526 12.5567 12.1667 11.6004 12.1667C11.0117 12.1667 10.4676 12.2803 9.96845 12.5074C9.46914 12.7347 9.03814 13.0462 8.67558 13.4425C8.31288 13.8387 8.02639 14.3039 7.81625 14.8373C7.60583 15.3709 7.50098 15.9494 7.50098 16.5727C7.50098 17.196 7.59807 17.743 7.79269 18.2448C7.98702 18.7468 8.26024 19.1774 8.61264 19.5365C8.96461 19.8959 9.38249 20.1759 9.86613 20.3765C10.3495 20.577 10.8804 20.6776 11.4586 20.6776C11.7213 20.6776 11.9633 20.659 12.184 20.6222C12.4047 20.585 12.6149 20.5243 12.8147 20.4399C13.0143 20.3555 13.2114 20.2472 13.406 20.1149C13.6004 19.983 13.8027 19.8164 14.013 19.6157V20.3924C14.013 20.9947 13.8526 21.4646 13.5321 21.8028C13.2113 22.1409 12.7516 22.31 12.1524 22.31C11.448 22.31 10.996 22.0406 10.7964 21.5017H7.57986C7.66384 21.9454 7.8322 22.3548 8.0844 22.73C8.33673 23.1049 8.65991 23.4326 9.05408 23.7126C9.44825 23.9925 9.90791 24.212 10.4337 24.3704C10.9592 24.5289 11.5374 24.6082 12.1682 24.6082C12.7252 24.6082 13.2429 24.5448 13.7213 24.4179C14.1996 24.2911 14.6281 24.1168 15.0064 23.8949C15.3849 23.6731 15.7081 23.4115 15.9761 23.1105C16.2441 22.8093 16.4413 22.4844 16.5674 22.1358C16.662 21.8608 16.7355 21.5439 16.7882 21.1848C16.8405 20.8254 16.867 20.4189 16.867 19.9644V13.096H16.8652ZM13.8293 17.1512C13.7292 17.3785 13.598 17.5766 13.4351 17.7456C13.2721 17.9147 13.0776 18.0468 12.8517 18.1418C12.6256 18.2368 12.3865 18.2845 12.1343 18.2845C11.8821 18.2845 11.627 18.237 11.401 18.1418C11.1748 18.0468 10.9805 17.9147 10.8176 17.7456C10.6545 17.5766 10.5259 17.3786 10.4313 17.1512C10.3368 16.9241 10.2894 16.6784 10.2894 16.4143C10.2894 16.1501 10.3392 15.9229 10.4391 15.701C10.5389 15.4792 10.673 15.2865 10.8412 15.1225C11.0093 14.9588 11.2039 14.8269 11.4246 14.7263C11.6453 14.626 11.8819 14.5757 12.1342 14.5757C12.3865 14.5757 12.6096 14.6232 12.8357 14.7184C13.0617 14.8134 13.2588 14.9456 13.4271 15.1146C13.595 15.2837 13.7291 15.4792 13.8291 15.701C13.9289 15.9229 13.9789 16.1662 13.9789 16.43C13.9789 16.6939 13.9291 16.9241 13.8293 17.1512Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.1204 13.3151C26.5563 13.701 26.8953 14.1606 27.1374 14.6939V14.6941C27.379 15.2278 27.5001 15.8167 27.5001 16.4613C27.5001 17.1059 27.3763 17.6951 27.1295 18.2284C26.8824 18.7621 26.5434 19.2217 26.1125 19.6073C25.6814 19.9931 25.1637 20.2915 24.5594 20.5027C23.9548 20.714 23.2901 20.8197 22.5963 20.8197C21.9025 20.8197 21.2611 20.7139 20.6726 20.5027C20.0837 20.2915 19.5767 19.9903 19.151 19.5993C18.7253 19.2085 18.3916 18.741 18.1498 18.1967C17.9079 17.6525 17.7871 17.0476 17.7871 16.3819C17.7871 15.7796 17.9079 15.217 18.1498 14.6939C18.3916 14.1711 18.7277 13.7168 19.1589 13.331C19.5899 12.9454 20.1023 12.6416 20.6963 12.4197C21.29 12.1978 21.9498 12.0869 22.6436 12.0869C23.3374 12.0869 23.9812 12.1953 24.5752 12.4118C25.1689 12.6284 25.684 12.9295 26.1204 13.3151ZM20.4549 15.7322L24.007 14.4901L24.0071 14.4902C24.3537 14.3689 24.6866 14.7034 24.566 15.052L23.3303 18.6223C23.188 19.0332 22.603 19.0115 22.4914 18.5913L22.0686 17.0004L20.4858 16.5754C20.068 16.4631 20.0464 15.875 20.4549 15.7322Z"
                fill="white"
              />
            </svg>
          </AdvancedMarker>
        </Map>
      }
    >
      <S.ModalOpenButton>
        <MenuIcon />
        <Typography.Title size="lg" color="inherit">
          목록 보기
        </Typography.Title>
      </S.ModalOpenButton>
    </PageTemplate>
  );
}

export default ScrapBookPlaceMapPage;
