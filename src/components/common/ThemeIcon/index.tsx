import ThemeCafeIcon from '@_icons/theme_cafe.svg?react';
import ThemeFlagIcon from '@_icons/theme_flag.svg?react';
import ThemeHotelIcon from '@_icons/theme_hotel.svg?react';
import ThemeMuseumIcon from '@_icons/theme_museum.svg?react';
import ThemeParkIcon from '@_icons/theme_park.svg?react';
import ThemeRestaurantIcon from '@_icons/theme_restaurant.svg?react';
import ThemeShoppingIcon from '@_icons/theme_shopping.svg?react';
import ThemeStoreIcon from '@_icons/theme_store.svg?react';
import ThemeTripIcon from '@_icons/theme_trip.svg?react';

import ThemeOutlineCircle from '@_icons/theme_outline_circle.svg?react';
import styled from 'styled-components';

const Container = styled.div<{ color: string; width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;

  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${width}px`};

  svg:first-child {
    position: absolute;
    z-index: 1;

    width: ${({ width }) => `${width}px`};
    height: ${({ width }) => `${width}px`};

    circle {
      stroke: ${({ color }) => color};
    }
  }

  svg {
    path {
      fill: ${({ color }) => color};
      stroke: ${({ color, id }) => id === '09' && color};
    }
  }
`;

interface Props {
  id: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09';
  color: string;
  width: number;
  height: number;
}

function ThemeIcon({ id, color, width, height }: Props) {
  const themeIcon = {
    '01': <ThemeRestaurantIcon />,
    '02': <ThemeCafeIcon />,
    '03': <ThemeTripIcon />,
    '04': <ThemeShoppingIcon />,
    '05': <ThemeMuseumIcon />,
    '06': <ThemeStoreIcon />,
    '07': <ThemeHotelIcon />,
    '08': <ThemeParkIcon />,
    '09': <ThemeFlagIcon />,
  };

  return (
    <Container color={color} width={width} height={height} id={id}>
      <ThemeOutlineCircle />
      {themeIcon[id]}
    </Container>
  );
}

export default ThemeIcon;
