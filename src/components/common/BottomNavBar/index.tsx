import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import TagManager from 'react-gtm-module';

import HomeIcon from '@_icons/home.svg?react';
import MyIcon from '@_icons/my.svg?react';
import ScrapIcon from '@_icons/bookmark_filled.svg?react';
import TripIcon from '@_icons/trip.svg?react';
import ArticleIcon from '@_icons/article.svg?react';

import Typography from '../Typography';
import * as S from './style';

import LoginToast from '@_common/Toast/Toast/LoginToast';

function BottomNavBar() {
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState<boolean>(false);

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

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <S.NavList className="BottomNavigationBar">
      {navItems.map((item, index) => (
        <Link
          to={isLogin || item.title === '아티클' || item.title === '홈' ? item.path : ''}
          onClick={() => {
            if (!isLogin && item.title !== '홈' && item.title !== '아티클') {
              toast.dismiss();
              toast.custom(() => <LoginToast />, {
                duration: 1000,
              });
            }
            TagManager.dataLayer({
              dataLayer: {
                event: '홈-nav',
              },
            });
          }}
          id={`${item.title}-nav`}
          key={`navItem ${index}`}
        >
          <S.ListItem isActive={isMatches(item.path)}>
            {item.icon}
            <Typography.Label size="sm" color="inherit">
              {item.title}
            </Typography.Label>
          </S.ListItem>
        </Link>
      ))}
    </S.NavList>
  );
}

export default BottomNavBar;
