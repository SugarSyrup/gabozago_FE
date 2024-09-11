import { Dispatch, useEffect, useRef, useState } from 'react';

import CheckBoxItem from '../../common/CheckBox';

import * as S from './style';

const terms = [
  {
    id: 'ageCheck',
    label: '만 14세 이상입니다.',
    required: true,
  },
  {
    id: 'serviceCheck',
    label: '서비스 이용약관 동의',
    link: '/terms/04',
    required: true,
  },
  {
    id: 'personalCheck',
    label: '개인정보 수집 및 이용 동의',
    link: '/terms/05',
    required: true,
  },
  {
    id: 'TERMS01',
    label: '위치기반 서비스 이용약관 동의',
    link: '/terms/01',
    required: false,
  },
  {
    id: 'TERMS02',
    label: '서비스 관련 정보 앱푸시 수신동의',
    required: false,
  },
];

interface Props {
  setCheckboxActive: Dispatch<React.SetStateAction<boolean>>;
}

function CheckBoxs({ setCheckboxActive }: Props) {
  const [allChecks, setAllChecks] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [serviceCheck, setServiceCheck] = useState(false);
  const [personalCheck, setPersonalCheck] = useState(false);
  const [locationCheck, setLocationCheck] = useState(false);
  const [pushCheck, setPushCheck] = useState(false);

  useEffect(() => {
    if (allChecks === true) {
      setAgeCheck(true);
      setServiceCheck(true);
      setPersonalCheck(true);
      setLocationCheck(true);
      setCheckboxActive(true);
    }
  }, [allChecks]);

  useEffect(() => {
    if (ageCheck && serviceCheck && personalCheck) {
      setCheckboxActive(true);
    } else {
      setCheckboxActive(false);
    }
  }, [ageCheck, serviceCheck, personalCheck]);

  useEffect(() => {
    if (pushCheck && ageCheck && serviceCheck && personalCheck && locationCheck) {
      setAllChecks(true);
    }
  }, [pushCheck, ageCheck, serviceCheck, personalCheck, locationCheck]);

  return (
    <S.CheckBoxsContainer>
      <S.CheckBoxContainer>
        <CheckBoxItem
          checked={allChecks}
          inputId="allCheck"
          onChange={(e) => {
            const checkboxs = document.getElementsByClassName(
              'checkbox',
            ) as HTMLCollectionOf<HTMLInputElement>;

            for (let i = 0; i < checkboxs.length; i++) {
              if (e.currentTarget.checked) {
                checkboxs[i].checked = true;
                setAllChecks(true);
              } else {
                checkboxs[i].checked = false;
                setAllChecks(false);
                setCheckboxActive(false);
              }
            }
          }}
        >
          <S.CheckBoxLabelHighlight htmlFor="allCheck">
            약관 전체 동의합니다.
          </S.CheckBoxLabelHighlight>
          <S.CheckBoxNotRequired>선택항목 포함</S.CheckBoxNotRequired>
        </CheckBoxItem>
      </S.CheckBoxContainer>
      <S.CheckBoxContainer>
        {terms.map((term) => (
          <CheckBoxItem
            key={term.id}
            name={term.id}
            required={term.required}
            className="checkbox"
            onClick={(e) => {
              switch (term.id) {
                case 'ageCheck':
                  setAgeCheck(e.currentTarget.checked);
                  break;
                case 'serviceCheck':
                  setServiceCheck(e.currentTarget.checked);
                  break;
                case 'personalCheck':
                  setPersonalCheck(e.currentTarget.checked);
                  break;
                case 'TERMS01':
                  setLocationCheck(e.currentTarget.checked);
                  break;
                case 'TERMS02':
                  setPushCheck(e.currentTarget.checked);
                  break;
              }
              if (!e.currentTarget.checked) {
                setAllChecks(false);
              }
            }}
          >
            <S.CheckBoxLabel htmlFor={`${term.id}`}>
              {term.link ? (
                <S.TermLink
                  onClick={() => {
                    window.open(term.link, '_blank', 'width=500,height=600');
                  }}
                >
                  {term.label}
                </S.TermLink>
              ) : (
                term.label
              )}
            </S.CheckBoxLabel>
            {term.required ? (
              <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
            ) : (
              <S.CheckBoxNotRequired>(선택)</S.CheckBoxNotRequired>
            )}
          </CheckBoxItem>
        ))}
      </S.CheckBoxContainer>
    </S.CheckBoxsContainer>
  );
}

export default CheckBoxs;
