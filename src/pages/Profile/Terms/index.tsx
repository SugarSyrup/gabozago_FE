import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageTemplate from '@_common/PageTemplate';
import PageHeader from '@_common/PageHeader';
import Typography from '@_common/Typography';

import * as S from './style';
import { get, post } from '@_utils/api';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';

interface TTerm {
  id: string;
  title: string;
  contents: {
    heading?: string;
    text: string;
    table?: {
      thead: string[];
      tbody: {
        [key: string]: string;
      }[];
    };
  }[];
}

function TermsPage() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const termsMap: TTerm[] = [
    {
      id: '01',
      title: '위치 서비스 이용 동의',
      contents: [],
    },
    {
      id: '02',
      title: '개인정보 처리방침',
      contents: [
        {
          text: `포레FOR:e(이하 ‘회사’)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령(이하 “관련 법령” 이라 함)에 따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립합니다. 
개인정보처리방침은 이용자가 언제나 쉽게 열람할 수 있도록 가보자고 서비스 초기화면을 통해 공개하고 있으며, 개인정보 관련법령, 지침, 고시 또는 회사 정책의 변경에 따라 변경될 수 있습니다.`,
        },
        {
          heading: '1. 개인정보의 수집',
          text: `(1) 가보자고 서비스 제공을 위한 필요 최소한의 개인정보를 수집합니다.
회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 개별 어플리케이션을 통해 서비스 제공을 위해 필요 최소한의 개인정보를 수집하고 있습니다.
서비스 제공을 위해 반드시 필요한 최소한의 정보를 필수항목으로, 그 외 특화된 서비스를 제공하기 위해 추가 수집하는 정보는 선택항목으로 동의를 받고 있으며, 선택항목에 동의하지 않은 경우에도 서비스 이용 제한은 없습니다.

[회원가입 시]
타사 계정을 이용한 회원가입 시 제3자로부터 제공받는 개인정보는 다음과 같습니다.
네이버 : 회원이름, 연락처 이메일 주소, 네이버 계정 식별자, 별명, 프로필 사진
카카오 : 이메일 주소, 카카오 계정 식별자
Google : 이름, 프로필사진, 이메일 주소, Google 계정 식별자
Apple : 이메일 주소, Apple ID 식별자

[고객 상담 시]
고객 상담, 민원 접수 및 처리에 필요한 개인정보 (이름, 연락처, 이메일) 및 상담 내용을 수집할 수 있습니다.

(2) 서비스 이용과정에서 아래 정보가 자동 생성되어 수집, 저장, 조합, 분석될 수 있습니다.
자동 수집 정보(생성정보)의 예 : 접속지 정보, 쿠키, 기기고유번호, 서비스 이용기록, 방문기록

(3) 개인정보를 수집하는 방법은 아래와 같습니다.
회사는 회원가입 및 서비스 이용 과정에서 이용자로부터 직접 입력 받는 방식으로 필요한 최소한의 개인정보를 수집하며, 서비스 이용 과정에서 추가적인 정보를 수집하고 있습니다. 오프라인으로 진행되는 이벤트 및 세미나에서 서면을 통해 개인정보를 수집할 수 있으며, 고객센터 상담 과정에서 웹 페이지, 메일, 팩스, 전화 등을 통해서도 수집할 수 있습니다.
회사는 개인정보의 수집이 발생하는 경우, 반드시 ‘개인정보 수집 및 이용’에 대한 이용자의 사전 동의를 받습니다. 다만 IP 주소, 쿠키, 기기정보 등의 경우 PC 웹, 모바일 웹/앱으로 서비스를 이용하는 과정에서 자동으로 생성되어 수집될 수 있습니다.`,
        },
        {
          heading: '2. 개인정보 이용',
          text: `(1) 회원관리, 서비스 제공·개선, 신규 서비스 개발 등을 위해 이용합니다.
회원 식별/가입의사 확인, 본인/연령 확인
14세 미만 아동의 개인정보 수집 시 법정 대리인 동의여부 확인, 법정 대리인 권리행사 시 본인 확인
문의사항 또는 불만처리, 공지사항 전달
서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및 부정 이용 행위 등 포함)에 대한 방지 및 제재
인구통계학적 특성과 이용자의 관심, 기호, 성향의 추정을 통한 맞춤형 콘텐츠 추천 및 이벤트, 광고 등 마케팅에 활용
신규 서비스 개발 및 서비스 기능 개선, 개인화된 서비스 제공, 프라이버시 보호를 위한 서비스 환경 구축
서비스 이용 기록, 접속 빈도 및 서비스 이용에 대한 통계

(2) 개인정보의 추가적인 이용・제공을 하는 경우가 있습니다.
수집 목적과 합리적으로 관련된 범위에서는 법령에 따라 이용자의 동의 없이 개인정보를 이용하거나 제3자에게 제공할 수 있습니다. 이때 ‘당초 수집 목적과 관련성이 있는지, 수집한 정황 또는 처리 관행에 비추어 볼 때 개인정보의 추가적인 이용 또는 제공에 대한 예측 가능성이 있는지, 이용자의 이익을 부당하게 침해하는지, 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지’를 종합적으로 고려합니다.`,
        },
        {
          heading: '3. 개인정보 처리위탁',
          text: `(1) 회사는 원활하고 향상된 서비스를 제공하기 위해서 개인정보 처리 업무를 다른 회사에 위탁할 수 있습니다. 회사는 개인정보 처리 업무 위탁 시 이용자의 개인정보가 안전하게 처리될 수 있도록 관리·감독하며 다른 목적으로 이용자의 개인정보를 처리하지 않도록 제한합니다.

(2) 회사는 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.`,
          table: {
            thead: ['위탁받는 자 (수탁자)', '위탁하는 업무의 내용'],
            tbody: [
              {
                '아마존 웹 서비스 (AWS)': '클라우드 서비스(정보 저장, 처리 등)',
              },
              {
                네이버: '간편 로그인',
              },
              {
                카카오: '간편 로그인, 비즈니스 채널 호라용 LMS & 알림톡 발송',
              },
              {
                Google: '간편 로그인',
              },
              {
                Apple: '간편 로그인',
              },
            ],
          },
        },
        {
          heading: '4. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항',
          text: `(1) 쿠키(Cookie) 자동 수집회사는 정보주체의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’을 설치 운용 합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 정보주체의 브라우저에 보내는 작은 텍스트 파일로서 정보주체의 컴퓨터 하드디스크에 저장됩니다.
쿠키 등 사용 목적홈페이지 정보주체의 접속 빈도나 방문 시간 등을 분석, 정보주체의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
쿠키 설정 거부 방법정보주체는 쿠키 설치에 대한 선택권을 가지고 있습니다. 쿠키 설정을 거부하는 방법으로는 정보주체가 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다
     설정방법
인터넷 익스플로어: 웹 브라우저 상단의 도구 - 인터넷 옵션 - 개인정보
Chrome : 웹브라우저 우측 상단 아이콘 - 설정 - 고급 설정 표시 - 개인정보 섹션의 콘텐츠 설정 버튼 - 쿠키 섹션에서 직접 설정
Safari : 웹브라우저 상단 메뉴 - 환경 설정 - 개인 정보 보호 - 쿠키 및 웹 사이트 데이터 - 직접 설정
Firefox : 웹브라우저 우측 상단 아이콘 - 설정 - 개인 정보 및 보안 - 쿠키와 사이트 데이터 - 직접 설정
단, 고객이 쿠키 설치를 거부하였을 경우 회사 웹사이트 이용에 제약이 있을 수 있습니다.

(2) Google Analytics 운영 목적
회사는 Google.Inc (이하 'Google'이라 합니다.)에서 제공하는 웹 로그 분석 도구인 Google Analytics를 정보주체에게 최적화된 서비스의 제공을 목적으로 운영합니다. 웹 로그 분석이란 웹 사이트 상에서 정보주체의 서비스 이용 형태에 대한 분석을 의미합니다. Google은 회사를 대신하여 정보를 처리하여 정보주체의 웹 사이트 사용을 분석합니다. 이 과정에서 개인 식별이 가능한 어떠한 정보도 처리하지 않습니다.
거부 방법: Google의 정보 처리를 원하지 않는 경우 tools.google.com/dlpage/gaoptout에서 정보주체의 웹 브라우저에 대한 부가 기능을 다운로드 및 설치하여 Google의 정보 처리를 거부할 수 있습니다.
설정방법 예(인터넷 익스플로어의 경우): Google 애널리틱스 차단 브라우저 부가 기능 다운로드 및 실행 - 브라우저 재시작
단, 정보주체께서 웹 로그 분석을 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.`,
        },
      ],
    },
    {
      id: '03',
      title: '가보자고 이용약관',
      contents: [
        {
          heading: '제 1조(목적)',
          text: '본 약관은 포레 FOR:e(이하“회사”)가 제공하는 가보자고 및 가보자고 관련 제반 서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다',
        },
        {
          heading: '제 2조 (정의)',
          text: '본 약관에서 사용하는 용어의 정의는 다음과 같습니다. “서비스”라 함은 트리플이 제공하는 여행 정보 플랫폼 관련 서비스로서, 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 “이용자”가 이용할 수 있는 “회사”가 제공하는 트리플 및 트리플 관련 웹(Web)∙앱(App) 등의 제반 서비스를 의미합니다.“이용자”라 함은 회사의 “서비스”에 접속하여 본 약관에 따라 “회사”가 제공하는 “서비스”를 이용하는 회원 및 비회원을 말합니다.“회원”이라 함은 회사의 “서비스”에 접속하여 본 약관에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을 말합니다.“비회원”이라 함은 회원가입을 하지 않고 회사의 “서비스”에 접속하여 이 약관에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을 말합니다.“아이디(ID)”라 함은 “회원”의 식별과 “서비스” 이용을 위하여 “회원”이 정하고 “회사”가 승인하는 전자우편 주소를 의미합니다.“비밀번호”라 함은 “회원”이 부여받은 아이디와 일치되는 “회원”임을 확인하고 비밀보호를 위해 ”회원” 자신이 정한 문자 또는 숫자의 조합을 의미합니다.“판매자”라 함은 “회사”가 제공하는 “서비스”를 이용하여 자신의 상품, 용역, 서비스 등을 판매, 제공하는 자를 의미하며, 회사로부터 예약, 판매대행, 광고 서비스 등을 제공받는 자를 의미하며, “회사”가 “이용자”에게 상품 등을 직접 판매, 제공하는 경우 “판매자”의 지위를 갖습니다.“유료 서비스“라 함은 ”회사”가 제공하는 숙박업소 예약 등 기타 유료로 이용할 수 있는 상품 및 제반서비스를 의미합니다.“콘텐츠”라 함은 다음 각 목의 내용과 관련하여 “회사”, 에디터 또는 회원이 동영상, 이미지, 음원, 텍스트 등을 편집하여 “회사”가 운영하는 “서비스”에 업로드 할 목적으로 제작되는 창작물을 의미합니다. 가. 여행 관련 소식 나. 추천 여행 일정 다. 여행기록 라. 그 밖에 여행과 관련된 지식 또는 정보 “에디터”라 함은 “회사”와 고용계약, 업무위탁계약 또는 업무제휴계약 등을 체결하여 “서비스” 내지 “서비스”와 관련된 페이지에 업로드 할 목적으로 “콘텐츠”를 제작 및 공급하는 개인 또는 기업을 의미합니다. “여행 소식 알림”이라 함은 “회사”가 제공하는 “서비스”의 일종으로, “에디터”가 작성한 “콘텐츠”를 “회원”에 앱 푸시, 전자우편, SMS 등을 통해 제공하는 것을 의미합니다.“게시물”이라 함은 “서비스”에 업로드 된 “콘텐츠” 및 “콘텐츠”를 구성하는 각종 파일과 링크, “회원”들의 댓글 등을 포함하는 정보를 의미합니다.“포인트”라 함은 “서비스”의 효율적 이용을 위해 “회사”가 임의로 책정 또는 지급, 조정할 수 있는 재산적 가치가 없는 “서비스” 상의 가상 데이터를 의미합니다.“쿠폰”이라 함은 “회원”이 “서비스”에서 결제 시 표시된 금액 또는 비율만큼 결제 금액을 할인받을 수 있는 할인권을 의미합니다.“캐시”라 함은 “서비스” 또는 제휴사 적립 이벤트 등을 통해 지급받은 적립금을 의미합니다.',
        },
      ],
    },
    {
      id: '04',
      title: '오픈소스 라이선스',
      contents: [
        {
          heading: '제 1조(목적)',
          text: '본 약관은 포레 FOR:e(이하“회사”)가 제공하는 가보자고 및 가보자고 관련 제반 서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다',
        },
        {
          heading: '제 2조 (정의)',
          text: '본 약관에서 사용하는 용어의 정의는 다음과 같습니다. “서비스”라 함은 트리플이 제공하는 여행 정보 플랫폼 관련 서비스로서, 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 “이용자”가 이용할 수 있는 “회사”가 제공하는 트리플 및 트리플 관련 웹(Web)∙앱(App) 등의 제반 서비스를 의미합니다.“이용자”라 함은 회사의 “서비스”에 접속하여 본 약관에 따라 “회사”가 제공하는 “서비스”를 이용하는 회원 및 비회원을 말합니다.“회원”이라 함은 회사의 “서비스”에 접속하여 본 약관에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을 말합니다.“비회원”이라 함은 회원가입을 하지 않고 회사의 “서비스”에 접속하여 이 약관에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는 고객을 말합니다.“아이디(ID)”라 함은 “회원”의 식별과 “서비스” 이용을 위하여 “회원”이 정하고 “회사”가 승인하는 전자우편 주소를 의미합니다.“비밀번호”라 함은 “회원”이 부여받은 아이디와 일치되는 “회원”임을 확인하고 비밀보호를 위해 ”회원” 자신이 정한 문자 또는 숫자의 조합을 의미합니다.“판매자”라 함은 “회사”가 제공하는 “서비스”를 이용하여 자신의 상품, 용역, 서비스 등을 판매, 제공하는 자를 의미하며, 회사로부터 예약, 판매대행, 광고 서비스 등을 제공받는 자를 의미하며, “회사”가 “이용자”에게 상품 등을 직접 판매, 제공하는 경우 “판매자”의 지위를 갖습니다.“유료 서비스“라 함은 ”회사”가 제공하는 숙박업소 예약 등 기타 유료로 이용할 수 있는 상품 및 제반서비스를 의미합니다.“콘텐츠”라 함은 다음 각 목의 내용과 관련하여 “회사”, 에디터 또는 회원이 동영상, 이미지, 음원, 텍스트 등을 편집하여 “회사”가 운영하는 “서비스”에 업로드 할 목적으로 제작되는 창작물을 의미합니다. 가. 여행 관련 소식 나. 추천 여행 일정 다. 여행기록 라. 그 밖에 여행과 관련된 지식 또는 정보 “에디터”라 함은 “회사”와 고용계약, 업무위탁계약 또는 업무제휴계약 등을 체결하여 “서비스” 내지 “서비스”와 관련된 페이지에 업로드 할 목적으로 “콘텐츠”를 제작 및 공급하는 개인 또는 기업을 의미합니다. “여행 소식 알림”이라 함은 “회사”가 제공하는 “서비스”의 일종으로, “에디터”가 작성한 “콘텐츠”를 “회원”에 앱 푸시, 전자우편, SMS 등을 통해 제공하는 것을 의미합니다.“게시물”이라 함은 “서비스”에 업로드 된 “콘텐츠” 및 “콘텐츠”를 구성하는 각종 파일과 링크, “회원”들의 댓글 등을 포함하는 정보를 의미합니다.“포인트”라 함은 “서비스”의 효율적 이용을 위해 “회사”가 임의로 책정 또는 지급, 조정할 수 있는 재산적 가치가 없는 “서비스” 상의 가상 데이터를 의미합니다.“쿠폰”이라 함은 “회원”이 “서비스”에서 결제 시 표시된 금액 또는 비율만큼 결제 금액을 할인받을 수 있는 할인권을 의미합니다.“캐시”라 함은 “서비스” 또는 제휴사 적립 이벤트 등을 통해 지급받은 적립금을 의미합니다.',
        },
      ],
    },
  ];
  const data: TTerm | undefined = termsMap.find((item) => item.id === id);

  useEffect(() => {
    if (id === undefined || data === undefined) {
      alert('접근할 수 없는 페이지입니다.');
      navigate(-1);
    }

    if (id === '01' && localStorage.getItem('access_token') === null) {
      alert('접근할 수 없는 페이지입니다.');
      navigate(-1);
    }
  }, [id, data]);

  useEffect(() => {
    get<{ TERMS01: boolean }>('/settings/terms?q=TERMS01').then((res) => {
      setIsActive(res.data.TERMS01);
    });
  }, []);

  return (
    <PageTemplate
      nav={false}
      header={
        <PageHeader>
          <Typography.Title size="lg">{termsMap[Number(id) - 1].title}</Typography.Title>
        </PageHeader>
      }
    >
      {id === '01' ? (
        <S.Contents>
          <Typography.Title size="lg" color="black" noOfLine={2}>
            위치 기반 서비스 이용을 위해
            <br />
            위치정보 이용약관에 동의해 주세요.
          </Typography.Title>
          <S.LocationAccessToggleWrapper>
            <Typography.Body size="lg" color="inherit">
              위치정보 이용약관 동의
            </Typography.Body>
            <S.ToggleSwitch
              isActive={isActive}
              onClick={() => {
                setIsActive((prev) => !prev);
                post('/settings/terms', {
                  term: 'TERMS01',
                }).then(() => {
                  toast.dismiss();
                  toast.custom(() => (
                    <Toast>
                      <Typography.Body size="lg" color="white">
                        위치정보 이용약관에 {isActive ? '거부' : '동의'}하셨습니다. (
                        {new Date().getFullYear()}. {new Date().getMonth() + 1}.{' '}
                        {new Date().getDate()})
                      </Typography.Body>
                    </Toast>
                  ));
                });
              }}
            >
              <div />
            </S.ToggleSwitch>
          </S.LocationAccessToggleWrapper>
          <S.TermsLink
            onClick={() => {
              window.location.href =
                'https://teamfore.notion.site/f5afac74fa1f4abb8a4ca09c5e8d47bf';
            }}
          >
            <Typography.Body size="md" color="inherit">
              약관 자세히보기
            </Typography.Body>
          </S.TermsLink>
          <Typography.Body size="sm" color="#A6A6A6" noOfLine={-1}>
            약관에 동의했더라도, 위치 접근이 꺼져있으면 위치 서비스를 이용할 수 없어요.
            <br />
            기기 설정 &gt; 가보자고 앱 &gt; 위치 접근을 허용해 주세요!
          </Typography.Body>
        </S.Contents>
      ) : (
        <S.TermsContainer>
          {termsMap[Number(id) - 1].contents.map((content, index) => (
            <S.TermsContent key={index}>
              {content.heading && <S.TermsHeader>{content.heading}</S.TermsHeader>}
              <S.TermsText>{content.text}</S.TermsText>
              {content.table && (
                <table>
                  <thead>
                    <tr>
                      {content.table.thead.map((thead, index) => (
                        <th key={index}>{thead}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {content.table.tbody.map((tbody, index) => (
                      <tr key={index}>
                        {Object.keys(tbody).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))}
                        {Object.values(tbody).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </S.TermsContent>
          ))}
        </S.TermsContainer>
      )}
    </PageTemplate>
  );
  // );
}

export default TermsPage;
