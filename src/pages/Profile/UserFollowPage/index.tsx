import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './style';
import LeftChevronIcon from '../../../assets/icons/chevron_left.svg?react';

import FollowList from '../../../components/profile/FollowList';
import PageTemplate from '../../../components/common/PageTemplate';

import { Followers, FollowerType } from '../../../assets/data/followers';
import useSearchInput from '../../../hooks/useSearchInput';

function UserFollowPage() {
  const { uid } = useParams();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [currentTap, setCurrentTap] = useState<'follower' | 'following'>('follower');
  const [data, setData] = useState<FollowerType[]>(Followers);
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '사용자명, 닉네임을 검색해보세요.',
    onSubmit: (e) => {
      e.preventDefault();
    },
    onChange,
    backgroundColor: '#F3F4F6',
    borderColor: '#F3F4F6',
    searchIconColor: '#ADADAD',
    placeholderColor: '#ADADAD',
  });
  const navigate = useNavigate();

  function onChange() {
    setData(
      Followers.filter((user) =>
        user.name.includes(inputRef.current ? inputRef.current.value : ''),
      ),
    );
  }

  useEffect(() => {
    // TODO : [백엔드] 유저의 팔로우, 팔로잉 리스트 GET
    // TODO : [백엔드] profile id에 따른 유저 명 GET
  }, []);

  useEffect(() => {
    // TODO: [백엔드] currentTap 변경에 따라 팔로워/팔로잉 리스트 data 변경하기
  }, [currentTap]);

  return (
    <PageTemplate>
      <S.FixedHeader>
        <S.Header>
          <LeftChevronIcon
            onClick={() => {
              navigate(-1);
            }}
          />
          <span>최민석</span>
        </S.Header>
        <S.TabNavigation>
          <S.NavigationItem
            isHighlight={currentTap === 'follower'}
            onClick={() => {
              setCurrentTap('follower');
            }}
          >
            팔로워
          </S.NavigationItem>
          <S.NavigationItem
            isHighlight={currentTap === 'following'}
            onClick={() => {
              setCurrentTap('following');
            }}
          >
            팔로잉
          </S.NavigationItem>
        </S.TabNavigation>
        <S.SeperateLine>
          <S.HighLightLine position={currentTap} />
        </S.SeperateLine>

        <S.InputWrapper>
          <SearchInput />
        </S.InputWrapper>

        <FollowList data={data} isMyProfile={isMyProfile} />
      </S.FixedHeader>
    </PageTemplate>
  );
}

export default UserFollowPage;
