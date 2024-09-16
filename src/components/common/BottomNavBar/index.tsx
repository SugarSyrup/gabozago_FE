import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../../../assets/icons/home.svg?react';
import MyIcon from '../../../assets/icons/my.svg?react';
import ScrapIcon from '../../../assets/icons/bookmark_filled.svg?react';
import TripIcon from '../../../assets/icons/trip.svg?react';
import ArticleIcon from '../../../assets/icons/article.svg?react';
import * as S from './style';
import Typography from '../Typography';

function BottomNavBar() {
  const { pathname } = useLocation();
  const navItems = [
    { title: '홈', icon: <HomeIcon />, path: '/' },
    { title: '내 여행', icon: <TripIcon />, path: '/mytrip' },
    { title: '스크랩', icon: <ScrapIcon />, path: '/scrapbook' },
    { title: '아티클', icon: <ArticleIcon />, path: '/articles' },
    { title: 'MY', icon: <MyIcon />, path: '/profile' },
  ];
  const isMatches = (path: string) => {
    if (path === '/') {
      return !!(pathname === '/' || pathname.startsWith('/journal'));
    }

    return !!pathname.startsWith(path);
  };

  return (
    <S.NavList>
      {navItems.map((item, index) => (
        <S.ListItem isActive={isMatches(item.path)} key={`navItem ${index}`}>
          <Link to={item.path}>
            {item.icon}
            <Typography.Label size="sm" color="inherit">
              {item.title}
            </Typography.Label>
          </Link>
        </S.ListItem>
      ))}
    </S.NavList>
  );
}

export default BottomNavBar;
