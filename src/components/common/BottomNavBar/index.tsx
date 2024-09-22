import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '../../../assets/icons/home.svg?react';
import MyIcon from '../../../assets/icons/my.svg?react';
import ScrapIcon from '../../../assets/icons/bookmark_filled.svg?react';
import TripIcon from '../../../assets/icons/trip.svg?react';
import ArticleIcon from '../../../assets/icons/article.svg?react';
import * as S from './style';
import Typography from '../Typography';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';
import styled from 'styled-components';

const ToastLink = styled.span`
  display: inline-block;
  padding-top: 6px;
  padding-bottom: 6px;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration-line: underline;
  cursor: pointer;
`;

function BottomNavBar() {
  const navigate = useNavigate();
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
    <S.NavList>
      {navItems.map((item, index) => (
        <S.ListItem isActive={isMatches(item.path)} key={`navItem ${index}`}>
          <Link
            to={isLogin ? item.path : ''}
            onClick={() => {
              if (!isLogin && item.title !== '홈' && item.title !== '아티클') {
                toast.dismiss();
                toast.custom(
                  () => (
                    <Toast>
                      <Typography.Body size="lg" color="white">
                        로그인이 필요한 서비스 입니다
                      </Typography.Body>
                      <ToastLink
                        onClick={() => {
                          navigate(`/login`);
                        }}
                      >
                        로그인 하러가기
                      </ToastLink>
                    </Toast>
                  ),
                  {
                    duration: 1000,
                  },
                );
              }
            }}
          >
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
